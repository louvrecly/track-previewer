'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import TrackList from './track-list';
import Typography from '@mui/material/Typography';
import PageControl from './page-control';

const LIMIT = 20;

function loadTracks(
  query: string,
  offset: number = 0,
): Promise<SpotifyApi.SearchResponse> {
  return fetch(
    `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/tracks?query=${query}&offset=${offset}`,
  ).then((res) => res.json());
}

export default function Home() {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get('query') ?? '';
  const pageParam = searchParams.get('page') ?? '1';

  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState<SpotifyApi.TrackObjectFull[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [error, setError] = useState('');

  const page = useMemo(
    () => (parseInt(pageParam) > 0 ? parseInt(pageParam) : 1),
    [pageParam],
  );

  useEffect(() => {
    if (!queryParam) {
      return setIsLoading(false);
    }

    setIsLoading(true);

    loadTracks(queryParam, (page - 1) * LIMIT)
      .then(({ tracks }) => {
        if (tracks) {
          setTracks(tracks.items);
          setPageCount(Math.ceil(tracks.total / tracks.limit));
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [page, queryParam]);

  if (!queryParam)
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

      <PageControl
        query={queryParam}
        currentPage={page}
        pageCount={pageCount}
      />
    </Box>
  );
}
