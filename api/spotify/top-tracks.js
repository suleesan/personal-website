const axios = require("axios");

async function refreshAccessToken() {
  const params = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
  });

  const authString = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
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

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

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
      uri: track.uri,
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
};
