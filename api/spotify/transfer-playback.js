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
  res.setHeader("Access-Control-Allow-Methods", "PUT,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "PUT") {
    return res.status(405).json({ error: "Method not allowed" });
  }

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
};
