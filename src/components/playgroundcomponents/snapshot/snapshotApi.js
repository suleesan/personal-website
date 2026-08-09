import { supabase } from "../../../lib/supabaseClient";

const SNAPSHOT_BUCKET = "snapshot-photos";

export async function fetchSnapshots({ limit = 12 } = {}) {
  if (!supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from("snapshots")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    throw new Error(error.message || "Failed to load snapshots.");
  }

  return data || [];
}

export function getPhotoUrl(path) {
  if (!supabase || !path) return null;

  const { data } = supabase.storage.from(SNAPSHOT_BUCKET).getPublicUrl(path);
  return data?.publicUrl || null;
}
