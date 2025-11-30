import React from "react";
import Window from "./window";
import SpotifyTopTracks from "./spotify/spotify";

const SpotifyWindow = ({
  onClose,
  titleColor = "var(--color-pokemon-green)",
  bodyColor = "var(--color-pokemon-black)",
  titleFont,
  bodyFont,
  onDragStart,
  isDragging,
}) => {
  return (
    <Window
      title="Spotify Top 5 Tracks"
      actions={["close"]}
      width={600}
      height={250}
      titleColor={titleColor}
      bodyColor={bodyColor}
      titleFont={titleFont}
      bodyFont={bodyFont}
      onCloseClick={onClose}
      onDragStart={onDragStart}
      isDragging={isDragging}
    >
      <div className="h-full flex items-center justify-center">
        <SpotifyTopTracks highlightColor={titleColor} />
      </div>
    </Window>
  );
};

export default SpotifyWindow;
