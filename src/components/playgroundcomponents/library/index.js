import React, { useEffect, useState } from "react";
import Window from "../window";
import { fetchBooks } from "./libraryApi";

const formatRating = (rating) => {
  if (rating === null || rating === undefined || rating === "") return "";
  if (typeof rating === "number") {
    return `${rating}/5`;
  }
  return String(rating);
};

const Row = ({ book, accentColor, titleFont, bodyFont }) => {
  const byline = [book.author, formatRating(book.rating), book.yearRead]
    .filter(Boolean)
    .join(" · ");
  return (
    <li className="py-3 border-b border-black/10 last:border-b-0">
      <div
        className="text-base leading-snug"
        style={{ fontFamily: titleFont, color: accentColor || "inherit" }}
      >
        {book.title || "Untitled"}
      </div>
      <div
        className="text-xs opacity-75 mt-0.5"
        style={{ fontFamily: bodyFont }}
      >
        {byline || "—"}
      </div>
    </li>
  );
};

const LibraryWindow = ({
  onClose,
  titleColor = "var(--color-pokemon-darkblue)",
  bodyColor = "var(--color-pokemon-white)",
  titleFont,
  bodyFont,
  onDragStart,
  isDragging,
  accentColor,
}) => {
  const [status, setStatus] = useState("loading");
  const [books, setBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        setStatus("loading");
        const rows = await fetchBooks();
        if (!isMounted) return;
        setBooks(rows);
        setStatus(rows.length > 0 ? "success" : "empty");
      } catch (err) {
        console.error("Error fetching books:", err);
        if (isMounted) {
          setErrorMessage("Could not load the library right now.");
          setStatus("error");
        }
      }
    };

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Window
      title="Books"
      actions={["close"]}
      width={620}
      height={480}
      titleColor={titleColor}
      bodyColor={bodyColor}
      titleFont={titleFont}
      bodyFont={bodyFont}
      onCloseClick={onClose}
      onDragStart={onDragStart}
      isDragging={isDragging}
    >
      <div
        className="h-full w-full p-5 overflow-y-auto"
        style={{ fontFamily: bodyFont }}
      >
        {status === "loading" && (
          <ul className="space-y-3">
            {[...Array(6)].map((_, i) => (
              <li key={i} className="space-y-2 py-2">
                <div className="h-4 w-2/3 bg-black/10 rounded animate-pulse" />
                <div className="h-3 w-1/2 bg-black/5 rounded animate-pulse" />
              </li>
            ))}
          </ul>
        )}

        {status === "error" && (
          <p className="text-sm opacity-80">{errorMessage}</p>
        )}

        {status === "empty" && (
          <p className="text-sm opacity-80">No books to show yet.</p>
        )}

        {status === "success" && (
          <ul>
            {books.map((book) => (
              <Row
                key={book.id}
                book={book}
                accentColor={accentColor || titleColor}
                titleFont={titleFont}
                bodyFont={bodyFont}
              />
            ))}
          </ul>
        )}
      </div>
    </Window>
  );
};

export default LibraryWindow;
