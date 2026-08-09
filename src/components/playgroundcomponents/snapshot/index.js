import React, { useEffect, useMemo, useState } from "react";
import Window from "../window";
import PolaroidStack from "./polaroidStack";
import SnapshotList from "./snapshotList";
import { fetchSnapshots, getPhotoUrl } from "./snapshotApi";
import next from "../images/spotify/next.svg";
import previous from "../images/spotify/previous.svg";

const formatHeader = (snapshot) => {
  if (!snapshot) return "";
  if (snapshot.title) return snapshot.title;
  if (snapshot.created_at) {
    try {
      const d = new Date(snapshot.created_at);
      return d.toLocaleString("en-US", { month: "long", year: "numeric" });
    } catch (e) {
      return "";
    }
  }
  return "";
};

const SnapshotWindow = ({
  onClose,
  titleColor = "var(--color-pokemon-red)",
  bodyColor = "var(--color-pokemon-white)",
  titleFont,
  bodyFont,
  onDragStart,
  isDragging,
  accentColor,
}) => {
  const [status, setStatus] = useState("loading");
  const [snapshots, setSnapshots] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        setStatus("loading");
        const rows = await fetchSnapshots({ limit: 12 });
        if (!isMounted) return;
        if (!rows || rows.length === 0) {
          setSnapshots([]);
          setStatus("empty");
          return;
        }
        setSnapshots(rows);
        setCurrentIndex(0);
        setStatus("success");
      } catch (err) {
        console.error("Error fetching snapshots:", err);
        if (isMounted) {
          setErrorMessage("Could not load snapshots right now.");
          setStatus("error");
        }
      }
    };

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  const current = snapshots[currentIndex];

  const photoUrls = useMemo(() => {
    if (!current?.photo_paths) return [];
    return current.photo_paths.map((p) => getPhotoUrl(p)).filter(Boolean);
  }, [current]);

  const handlePrev = () => {
    if (snapshots.length === 0) return;
    setCurrentIndex((i) => (i > 0 ? i - 1 : snapshots.length - 1));
  };
  const handleNext = () => {
    if (snapshots.length === 0) return;
    setCurrentIndex((i) => (i < snapshots.length - 1 ? i + 1 : 0));
  };

  const headerLabel = formatHeader(current);

  return (
    <Window
      title="Susan's State of the World"
      actions={["close"]}
      width={720}
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
        className="h-full w-full flex flex-col p-4"
        style={{ fontFamily: bodyFont }}
      >
        {/* header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              disabled={snapshots.length < 2}
              className="p-2 bg-neutral-200/60 hover:bg-neutral-300/80 rounded-full disabled:opacity-30"
              aria-label="Previous snapshot"
            >
              <img src={previous} alt="Previous" className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={snapshots.length < 2}
              className="p-2 bg-neutral-200/60 hover:bg-neutral-300/80 rounded-full disabled:opacity-30"
              aria-label="Next snapshot"
            >
              <img src={next} alt="Next" className="w-4 h-4" />
            </button>
          </div>
          <div
            className="text-lg flex-1 text-center"
            style={{ fontFamily: titleFont, color: accentColor || "inherit" }}
          >
            {status === "loading" ? "loading…" : headerLabel}
          </div>
          <div className="w-[88px] text-right text-xs opacity-60">
            {snapshots.length > 0
              ? `${currentIndex + 1} / ${snapshots.length}`
              : ""}
          </div>
        </div>

        {/* body */}
        <div className="flex-1 flex gap-4 min-h-0">
          {/* left: polaroid stack / empty shape */}
          <div className="w-[45%] min-w-0 relative" style={{ minHeight: 360 }}>
            {status === "loading" ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-52 bg-neutral-300/60 rounded animate-pulse" />
              </div>
            ) : (
              <PolaroidStack photos={photoUrls} />
            )}
          </div>

          {/* right: list */}
          <div className="w-[55%] min-w-0">
            {status === "loading" && (
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-4 w-1/3 bg-neutral-300/60 rounded animate-pulse" />
                    <div className="h-3 w-4/5 bg-neutral-200/60 rounded animate-pulse" />
                    <div className="h-3 w-3/5 bg-neutral-200/60 rounded animate-pulse" />
                  </div>
                ))}
              </div>
            )}
            {status === "error" && (
              <div className="h-full flex items-center">
                <p className="text-sm opacity-80">{errorMessage}</p>
              </div>
            )}
            {status === "empty" && (
              <div className="h-full flex items-center">
                <p className="text-sm opacity-80 leading-relaxed">
                  No snapshots yet!
                </p>
              </div>
            )}
            {status === "success" && current && (
              <SnapshotList
                key={current.id || currentIndex}
                sections={current.sections}
                titleFont={titleFont}
                bodyFont={bodyFont}
                accentColor={accentColor || titleColor}
              />
            )}
          </div>
        </div>
      </div>
    </Window>
  );
};

export default SnapshotWindow;
