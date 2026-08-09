// gets books from my Notion Media database

const axios = require("axios");

const NOTION_API = "https://api.notion.com/v1";
const NOTION_VERSION = "2026-03-11";

function extractPlainText(prop) {
  if (!prop || !prop.type) return "";
  switch (prop.type) {
    case "title":
      return (prop.title || []).map((t) => t.plain_text).join("");
    case "rich_text":
      return (prop.rich_text || []).map((t) => t.plain_text).join("");
    case "select":
      return prop.select?.name || "";
    case "multi_select":
      return (prop.multi_select || []).map((s) => s.name).join(", ");
    case "number":
      return prop.number == null ? "" : prop.number;
    case "date":
      return prop.date?.start || "";
    case "checkbox":
      return prop.checkbox;
    case "people":
      return (prop.people || [])
        .map((p) => p.name)
        .filter(Boolean)
        .join(", ");
    case "url":
      return prop.url || "";
    case "email":
      return prop.email || "";
    case "phone_number":
      return prop.phone_number || "";
    case "status":
      return prop.status?.name || "";
    default:
      return "";
  }
}

function buildBook(page, propNames) {
  const props = page.properties || {};
  const titleProp = props[propNames.title];
  const authorProp = props[propNames.author];
  const ratingProp = props[propNames.rating];
  const dateProp = props[propNames.date];

  const title = extractPlainText(titleProp);
  const author = extractPlainText(authorProp);
  const rating = extractPlainText(ratingProp);
  const dateRead = extractPlainText(dateProp);

  let yearRead = null;
  if (dateRead) {
    const d = new Date(dateRead);
    if (!isNaN(d.getTime())) yearRead = d.getFullYear();
  }

  return {
    id: page.id,
    title,
    author,
    rating,
    dateRead,
    yearRead,
  };
}

async function fetchBooksFromNotion() {
  const apiKey = process.env.NOTION_API_KEY;
  const dataSourceId =
    process.env.NOTION_MEDIA_DATA_SOURCE_ID ||
    process.env.NOTION_BOOKS_DATA_SOURCE_ID;
  const databaseId =
    process.env.NOTION_MEDIA_DATABASE_ID ||
    process.env.NOTION_BOOKS_DATABASE_ID;

  if (!apiKey || (!dataSourceId && !databaseId)) {
    const err = new Error(
      "NOTION_API_KEY and NOTION_MEDIA_DATA_SOURCE_ID or NOTION_MEDIA_DATABASE_ID must be set."
    );
    err.statusCode = 500;
    throw err;
  }

  const propNames = {
    type: process.env.NOTION_MEDIA_TYPE_PROP || "Type",
    typeValue: process.env.NOTION_MEDIA_BOOKS_TYPE_VALUE || "Books",
    title: process.env.NOTION_BOOKS_TITLE_PROP || "Title",
    author: process.env.NOTION_BOOKS_AUTHOR_PROP || "Author",
    rating: process.env.NOTION_BOOKS_RATING_PROP || "Rating",
    date: process.env.NOTION_BOOKS_DATE_PROP || "Date read",
    show: process.env.NOTION_BOOKS_SHOW_PROP || "Show on website",
  };

  const resolvedDataSourceId =
    dataSourceId || (await fetchFirstDataSourceId(apiKey, databaseId));

  const body = {
    filter: {
      and: [
        {
          property: propNames.type,
          select: { equals: propNames.typeValue },
        },
        { property: propNames.date, date: { is_not_empty: true } },
        { property: propNames.show, checkbox: { equals: true } },
      ],
    },
    sorts: [{ property: propNames.date, direction: "descending" }],
    page_size: 100,
  };

  const pages = await queryAllPages(apiKey, resolvedDataSourceId, body);
  return pages.map((p) => buildBook(p, propNames));
}

function getNotionHeaders(apiKey) {
  return {
    Authorization: `Bearer ${apiKey}`,
    "Notion-Version": NOTION_VERSION,
    "Content-Type": "application/json",
  };
}

async function fetchFirstDataSourceId(apiKey, databaseId) {
  const { data } = await axios.get(`${NOTION_API}/databases/${databaseId}`, {
    headers: getNotionHeaders(apiKey),
  });

  const dataSources = data?.data_sources || [];
  const dataSourceName = process.env.NOTION_MEDIA_DATA_SOURCE_NAME;
  const matchingDataSource = dataSourceName
    ? dataSources.find((source) => source.name === dataSourceName)
    : dataSources[0];

  if (!matchingDataSource?.id) {
    const err = new Error(
      "No Notion data source found for the Media database."
    );
    err.statusCode = 500;
    throw err;
  }

  return matchingDataSource.id;
}

async function queryAllPages(apiKey, dataSourceId, body) {
  let cursor;
  const pages = [];

  do {
    const { data } = await axios.post(
      `${NOTION_API}/data_sources/${dataSourceId}/query`,
      cursor ? { ...body, start_cursor: cursor } : body,
      {
        headers: getNotionHeaders(apiKey),
      }
    );

    pages.push(...(data?.results || []));
    cursor = data?.has_more ? data.next_cursor : null;
  } while (cursor);

  return pages;
}

async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const books = await fetchBooksFromNotion();
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );
    res.json({ books });
  } catch (error) {
    const statusCode = error.statusCode || error.response?.status || 500;
    const message =
      error.response?.data?.message ||
      error.message ||
      "Failed to fetch books.";
    console.error("Notion books API error:", message);
    res.status(statusCode).json({ error: message });
  }
}

module.exports = handler;
module.exports.fetchBooksFromNotion = fetchBooksFromNotion;
