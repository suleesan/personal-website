#!/usr/bin/env node
/**
 * npm run snapshot:edit
 *
 * Owner-only CLI for editing rows in the Supabase `snapshots` table.
 * Reads SUPABASE_SERVICE_ROLE_KEY from .env so it bypasses RLS on update.
 * Never bundle this into the React app.
 */
require("dotenv").config();

const { createClient } = require("@supabase/supabase-js");
const { editor, select } = require("@inquirer/prompts");

const SUPABASE_URL =
  process.env.SUPABASE_URL || process.env.REACT_APP_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error(
    "Missing SUPABASE_URL (or REACT_APP_SUPABASE_URL) and/or SUPABASE_SERVICE_ROLE_KEY in .env."
  );
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { persistSession: false },
});

function validateSections(sections) {
  if (!Array.isArray(sections)) {
    throw new Error("`sections` must be an array.");
  }

  return sections.map((section, index) => {
    if (!section || typeof section !== "object") {
      throw new Error(`Section ${index} must be an object.`);
    }
    if (!section.label || typeof section.label !== "string") {
      throw new Error(`Section ${index} is missing a string "label".`);
    }
    if (!Array.isArray(section.items)) {
      throw new Error(`Section ${index} is missing an "items" array.`);
    }

    return {
      label: section.label.trim(),
      items: section.items
        .map((item) => (typeof item === "string" ? item.trim() : ""))
        .filter(Boolean),
    };
  });
}

function serializeSnapshot(snapshot) {
  return JSON.stringify(
    {
      title: snapshot.title || "",
      sections: snapshot.sections || [],
      photo_paths: snapshot.photo_paths || [],
    },
    null,
    2
  );
}

async function loadSnapshots() {
  const { data, error } = await supabase
    .from("snapshots")
    .select("id,title,created_at,sections,photo_paths")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    throw new Error(`Load failed: ${error.message}`);
  }
  return data || [];
}

async function chooseSnapshot(snapshots) {
  const idFromArg = process.argv[2];
  if (idFromArg) {
    const snapshot = snapshots.find((row) => row.id === idFromArg);
    if (!snapshot) {
      throw new Error(`Snapshot not found: ${idFromArg}`);
    }
    return snapshot;
  }

  return select({
    message: "Choose a snapshot to edit",
    choices: snapshots.map((snapshot) => ({
      name: `${snapshot.title || "Untitled"} (${snapshot.created_at || "no date"})`,
      value: snapshot,
    })),
  });
}

async function editSnapshot(snapshot) {
  const raw = await editor({
    message: "Edit snapshot JSON",
    default: serializeSnapshot(snapshot),
    postfix: ".json",
    waitForUseInput: false,
  });

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    throw new Error(`Could not parse JSON: ${err.message}`);
  }

  const title = typeof parsed.title === "string" ? parsed.title.trim() : "";
  if (!title) {
    throw new Error("`title` must be a non-empty string.");
  }

  const updates = {
    title,
    sections: validateSections(parsed.sections),
    photo_paths: Array.isArray(parsed.photo_paths)
      ? parsed.photo_paths.filter((path) => typeof path === "string" && path)
      : [],
  };

  const { error } = await supabase
    .from("snapshots")
    .update(updates)
    .eq("id", snapshot.id);

  if (error) {
    throw new Error(`Update failed: ${error.message}`);
  }

  return updates;
}

(async () => {
  try {
    const snapshots = await loadSnapshots();
    if (snapshots.length === 0) {
      console.log("No snapshots found.");
      return;
    }

    const snapshot = await chooseSnapshot(snapshots);
    const updated = await editSnapshot(snapshot);

    console.log("\nSnapshot updated");
    console.log(`  id:       ${snapshot.id}`);
    console.log(`  title:    ${updated.title}`);
    console.log(`  sections: ${updated.sections.length}`);
    console.log(`  photos:   ${updated.photo_paths.length}`);
  } catch (err) {
    if (err && err.name === "ExitPromptError") {
      console.log("\nAborted.");
      process.exit(0);
    }
    console.error("Error:", err.message || err);
    process.exit(1);
  }
})();
