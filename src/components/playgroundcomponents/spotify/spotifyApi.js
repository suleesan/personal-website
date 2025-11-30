const API_BASE_URL = process.env.REACT_APP_SPOTIFY_API_BASE_URL || "";

export async function fetchTopTracks({
  range = "medium_term",
  limit = 5,
} = {}) {
  const params = new URLSearchParams({
    range,
    limit: Math.min(limit, 5).toString(),
  });

  const url = API_BASE_URL
    ? `${API_BASE_URL}/api/spotify/top-tracks?${params.toString()}`
    : `/api/spotify/top-tracks?${params.toString()}`;

  const response = await fetch(url);

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || "Unable to load Spotify data.");
  }

  const data = await response.json();
  return data.tracks || [];
}

export async function fetchAccessToken() {
  const url = API_BASE_URL
    ? `${API_BASE_URL}/api/spotify/token`
    : `/api/spotify/token`;

  const response = await fetch(url);

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || "Unable to get access token.");
  }

  const data = await response.json();
  return data.access_token;
}

export async function transferPlayback(deviceId) {
  const url = API_BASE_URL
    ? `${API_BASE_URL}/api/spotify/transfer-playback`
    : `/api/spotify/transfer-playback`;

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ device_id: deviceId }),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || "Unable to transfer playback.");
  }

  return await response.json();
}
