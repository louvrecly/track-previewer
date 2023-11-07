'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TrackList from './track-list';
import Typography from '@mui/material/Typography';

function loadTracks(query: string) {
  return fetch(
    `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/tracks?query=${query}`,
  ).then((res) => res.json());
}

export default function Home() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');

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
    <Box sx={{ marginX: 'auto', padding: 3, maxWidth: 1024 }}>
      <Typography>Type something to search for tracks!</Typography>
    </Box>;

  if (isLoading)
    return (
      <Box sx={{ marginX: 'auto', padding: 3, maxWidth: 1024 }}>
        <Typography>Loading...</Typography>
      </Box>
    );

  if (error)
    return (
      <Box sx={{ marginX: 'auto', padding: 3, maxWidth: 1024 }}>
        <Typography>⚠️ Error fetching data: {error}</Typography>
      </Box>
    );

  return (
    <Box sx={{ marginX: 'auto', padding: 3, maxWidth: 1024 }}>
      <TrackList tracks={tracks} />
    </Box>
  );
}
