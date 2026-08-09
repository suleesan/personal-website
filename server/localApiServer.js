const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN,
} = process.env;
const LOCAL_API_SERVER_PORT =
  process.env.LOCAL_API_SERVER_PORT || process.env.SPOTIFY_SERVER_PORT || 8888;

app.use(express.json());
app.use(cors());

// Spotify routes
async function refreshAccessToken() {
  const params = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: SPOTIFY_REFRESH_TOKEN,
  });

  const authString = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    params.toString(),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${authString}`,
      },
    }
  );

  return response.data.access_token;
}

// get access token for Web Playback SDK (not used)
app.get("/api/spotify/token", async (req, res) => {
  try {
    const accessToken = await refreshAccessToken();
    res.json({ access_token: accessToken });
  } catch (error) {
    const statusCode = error.response?.status || 500;
    const message =
      error.response?.data?.error_description ||
      error.response?.data?.error?.message ||
      error.message ||
      "Failed to get access token.";

    console.error("Spotify token error:", message);
    res.status(statusCode).json({ error: message });
  }
});

// transfer playback to Web Playback SDK device (not used)
app.put("/api/spotify/transfer-playback", async (req, res) => {
  try {
    const accessToken = await refreshAccessToken();
    const { device_id } = req.body;

    if (!device_id) {
      return res.status(400).json({ error: "device_id is required" });
    }

    await axios.put(
      "https://api.spotify.com/v1/me/player",
      { device_ids: [device_id], play: false },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({ success: true });
  } catch (error) {
    const statusCode = error.response?.status || 500;
    const message =
      error.response?.data?.error?.message ||
      error.message ||
      "Failed to transfer playback.";

    console.error("Transfer playback error:", message);
    res.status(statusCode).json({ error: message });
  }
});

// get top 5 tracks
app.get("/api/spotify/top-tracks", async (req, res) => {
  try {
    const accessToken = await refreshAccessToken();
    const range = req.query.range || "short_term";
    const limit = Math.min(Number(req.query.limit) || 5, 10);

    const spotifyResponse = await axios.get(
      "https://api.spotify.com/v1/me/top/tracks",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          limit,
          time_range: range,
        },
      }
    );

    const tracks = spotifyResponse.data?.items?.map((track) => ({
      id: track.id,
      uri: track.uri, // add URI for Web Playback SDK
      name: track.name,
      artists: track.artists?.map((artist) => artist.name) || [],
      album: track.album?.name,
      albumArt: track.album?.images?.[0]?.url || "",
      previewUrl: track.preview_url,
      externalUrl: track.external_urls?.spotify,
    }));

    res.json({ tracks });
  } catch (error) {
    const statusCode = error.response?.status || 500;
    const message =
      error.response?.data?.error_description ||
      error.response?.data?.error?.message ||
      error.message ||
      "Failed to fetch Spotify data.";

    console.error("Spotify API error:", message);
    res.status(statusCode).json({ error: message });
  }
});

// Notion routes
try {
  const notionBooksHandler = require("../api/notion/books.js");
  app.get("/api/notion/books", (req, res) => notionBooksHandler(req, res));
} catch (e) {
  console.warn(
    "Notion books route not mounted (api/notion/books.js missing):",
    e.message
  );
}

if (require.main === module) {
  app.listen(LOCAL_API_SERVER_PORT, () => {
    console.log(`Local API server running on port ${LOCAL_API_SERVER_PORT}`);
  });
}

module.exports = app;
