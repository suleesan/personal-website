import React, { useEffect, useState } from "react";
import { fetchTopTracks } from "./spotifyApi";
import next from "../images/spotify/next.svg";
import previous from "../images/spotify/previous.svg";

const SpotifyTopTracks = ({
  highlightColor = "var(--color-pokemon-green)",
}) => {
  // const playlistId = process.env.REACT_APP_SPOTIFY_PLAYLIST_ID;
  const [tracks, setTracks] = useState([]);
  const [status, setStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const loadTracks = async () => {
      try {
        setStatus("loading");
        const topTracks = await fetchTopTracks({
          range: "medium_term",
          limit: 5,
        });

        if (!isMounted) return;

        setTracks(topTracks);
        setStatus("success");
      } catch (error) {
        console.error("Error fetching top tracks:", error);
        if (isMounted) {
          setErrorMessage("Could not load your top tracks right now.");
          setStatus("error");
        }
      }
    };

    loadTracks();
    return () => {
      isMounted = false;
    };
  }, []);

  const handlePrevious = () => {
    setCurrentTrackIndex((prev) => (prev > 0 ? prev - 1 : tracks.length - 1));
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev < tracks.length - 1 ? prev + 1 : 0));
  };

  const currentTrack = tracks[currentTrackIndex];

  return (
    <div>
      {status === "loading" && (
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-20 bg-neutral-800/60 rounded-lg animate-pulse"
            />
          ))}
        </div>
      )}

      {status === "error" && (
        <p className="text-sm text-neutral-400">{errorMessage}</p>
      )}

      {status === "success" && tracks.length > 0 && (
        <div className="flex flex-col items-center justify-center gap-4">
          {/* player */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrevious}
              className="p-3 bg-neutral-700 hover:bg-neutral-600 rounded-full border-2 border-neutral-600"
              style={{
                "--hover-border-color": highlightColor,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = highlightColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
              }}
              aria-label="Previous track"
            >
              <img src={previous} alt="Previous" className="w-6 h-6 ml-1" />
            </button>
            <iframe
              title={`Spotify Track: ${currentTrack.name}`}
              src={`https://open.spotify.com/embed/track/${currentTrack.id}?utm_source=generator&theme=0`}
              width="352"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
            <button
              onClick={handleNext}
              className="p-3 bg-neutral-700 hover:bg-neutral-600 rounded-full border-2 border-neutral-600"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = highlightColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
              }}
              aria-label="Next track"
            >
              <img src={next} alt="Next" className="w-6 h-6 mr-1" />
            </button>
          </div>
          {/* bottom indicator */}
          <div className="flex justify-center gap-2">
            {tracks.map((_, index) => {
              const isActive = index === currentTrackIndex;
              return (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentTrackIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    isActive ? "w-8" : "w-2 bg-neutral-600 hover:bg-neutral-500"
                  }`}
                  style={{
                    backgroundColor: isActive ? highlightColor : undefined,
                  }}
                  aria-label={`Go to track ${index + 1}`}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* const playlistId = process.env.REACT_APP_SPOTIFY_PLAYLIST_ID; */}
      {/* <iframe
        title="Spotify Embed: Recommendation Playlist"
        src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
        width="100%"
        height="100%"
        style={{ minHeight: "360px" }}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      /> */}
    </div>
  );
};

export default SpotifyTopTracks;
