'use client';

import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import HomePageContainer from './container';

const Typography = dynamic(() => import('@mui/material/Typography'));
const TrackList = dynamic(() => import('./components/track-list'));
const PageControl = dynamic(() => import('./components/page-control'));

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
  const [pageCount, setPageCount] = useState(1);
  const [error, setError] = useState('');

  const page = useMemo(
    () => (parseInt(pageParam) > 0 ? parseInt(pageParam) : 1),
    [pageParam],
  );

  const fallbackContent = useMemo(() => {
    if (!queryParam) return 'Type something to search for tracks!';
    if (isLoading) return 'Loading...';
    if (error) return `⚠️ Error fetching data: ${error}`;
    return '';
  }, [error, isLoading, queryParam]);

  useEffect(() => {
    if (!queryParam) {
      return setIsLoading(false);
    }

    setIsLoading(true);

    loadTracks(queryParam, (page - 1) * LIMIT)
      .then(({ tracks }) => {
        if (tracks) {
          setTracks(tracks.items);
          setPageCount(Math.ceil(tracks.total / tracks.limit) || 1);
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [page, queryParam]);

  if (!!fallbackContent)
    return (
      <HomePageContainer>
        <Typography variant="h6">{fallbackContent}</Typography>
      </HomePageContainer>
    );

  return (
    <HomePageContainer>
      <TrackList tracks={tracks} />

      <PageControl
        query={queryParam}
        currentPage={page}
        pageCount={pageCount}
      />
    </HomePageContainer>
  );
}
