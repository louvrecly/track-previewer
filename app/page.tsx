'use client';

import { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TrackList from './track-list';
import { SearchContext } from './contexts/search';
import Typography from '@mui/material/Typography';

function loadTracks(query: string) {
  return fetch(`http://localhost:3000/api/tracks?query=${query}`).then((res) =>
    res.json(),
  );
}

export default function Home() {
  const { query } = useContext(SearchContext);

  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState<SpotifyApi.TrackObjectFull[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!query) {
      return setIsLoading(false);
    }

    setIsLoading(true);

    loadTracks(query)
      .then(({ tracks }) => {
        if (tracks) setTracks(tracks.items);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [query]);

  if (!query)
    <Box sx={{ padding: 5 }}>
      <Typography>Type something to search for tracks!</Typography>
    </Box>;

  if (isLoading)
    return (
      <Box sx={{ padding: 5 }}>
        <Typography>Loading...</Typography>
      </Box>
    );

  if (error)
    return (
      <Box sx={{ padding: 5 }}>
        <Typography>Error fetching data: {error}</Typography>
      </Box>
    );

  return (
    <Box sx={{ padding: 5 }}>
      <TrackList tracks={tracks} />
    </Box>
  );
}
