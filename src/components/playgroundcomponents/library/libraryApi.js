const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "";

export async function fetchBooks() {
  const url = API_BASE_URL
    ? `${API_BASE_URL}/api/notion/books`
    : `/api/notion/books`;

  const response = await fetch(url);

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || "Unable to load library.");
  }

  const data = await response.json();
  return data.books || [];
}
