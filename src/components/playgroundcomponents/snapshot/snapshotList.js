import React from "react";

const SnapshotList = ({ sections, titleFont, bodyFont, accentColor }) => {
  const safeSections = Array.isArray(sections) ? sections : [];

  return (
    <div className="h-full overflow-y-auto pr-2 snapshot-list">
      <style>{`
        @keyframes snapshotFadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .snapshot-list-item {
          opacity: 0;
          animation: snapshotFadeUp 0.4s ease-out forwards;
        }
        .snapshot-list ul {
          list-style: disc;
          padding-left: 1.25rem;
        }
      `}</style>
      {safeSections.length === 0 && (
        <p
          className="text-sm opacity-70"
          style={{ fontFamily: bodyFont }}
        >
          No sections to show.
        </p>
      )}
      {safeSections.map((section, sIdx) => {
        const items = Array.isArray(section?.items) ? section.items : [];
        return (
          <div key={`${sIdx}-${section?.label || ""}`} className="mb-4">
            <div
              className="snapshot-list-item text-base mb-1"
              style={{
                fontFamily: titleFont,
                color: accentColor || "inherit",
                animationDelay: `${sIdx * 100}ms`,
              }}
            >
              {section?.label || ""}
            </div>
            <ul className="text-sm leading-relaxed">
              {items.map((item, iIdx) => (
                <li
                  key={`${sIdx}-${iIdx}`}
                  className="snapshot-list-item"
                  style={{
                    fontFamily: bodyFont,
                    animationDelay: `${sIdx * 100 + (iIdx + 1) * 60}ms`,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default SnapshotList;
