import queryString from 'query-string';

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

const basicToken = Buffer.from(clientId + ':' + clientSecret).toString(
  'base64',
);

const SPOTIFY_ENDPOINTS = {
  TOKEN: 'https://accounts.spotify.com/api/token',
  SEARCH: 'https://api.spotify.com/v1/search',
};

async function getAccessToken() {
  const response = await fetch(SPOTIFY_ENDPOINTS.TOKEN, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basicToken}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: queryString.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  return response.json();
}

export async function searchTracks(query: string, offset: number = 0) {
  const { access_token } = await getAccessToken();

  const res = await fetch(
    `${SPOTIFY_ENDPOINTS.SEARCH}?q=${query}&type=track&offset=${offset}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  );

  return res.json();
}
