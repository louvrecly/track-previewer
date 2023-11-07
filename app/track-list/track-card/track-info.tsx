import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useMemo } from 'react';

interface TrackInfoProps {
  trackName: string;
  trackUrl: string;
  artists: SpotifyApi.ArtistObjectSimplified[];
  album: SpotifyApi.AlbumObjectSimplified;
  durationMs: number;
}

const TrackInfo = ({
  trackName,
  trackUrl,
  artists,
  album,
  durationMs,
}: TrackInfoProps) => {
  const trackDuration = useMemo(() => {
    const durationInSeconds = Math.floor(durationMs / 1000);
    const durationInMinutes = Math.floor(durationInSeconds / 60);
    const remainderSeconds = durationInSeconds % 60;

    return { durationInMinutes, remainderSeconds };
  }, [durationMs]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'stretch',
        gap: 1,
      }}
    >
      <Typography sx={{ fontSize: 12 }}>
        Album:{' '}
        <Link
          href={album.external_urls.spotify}
          target="_blank"
          sx={{ fontWeight: 'bold', textDecoration: 'none' }}
        >
          {album.name}
        </Link>
      </Typography>

      <Typography sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: 16 }}>
        <Link href={trackUrl} target="_blank" sx={{ textDecoration: 'none' }}>
          {trackName}
        </Link>
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        <Typography sx={{ fontSize: 12 }}>
          By{' '}
          {!artists.length ? (
            <span>unknown artist</span>
          ) : (
            artists.map((artist, idx) => (
              <span key={artist.id}>
                {!!idx && ', '}
                <Link
                  href={artist.external_urls.spotify}
                  target="_blank"
                  sx={{ fontWeight: 'bold', textDecoration: 'none' }}
                >
                  {artist.name}
                </Link>
              </span>
            ))
          )}
        </Typography>

        <Typography sx={{ fontSize: 12 }}>
          {trackDuration.durationInMinutes.toString().padStart(2, '0')}:
          {trackDuration.remainderSeconds.toString().padStart(2, '0')}
        </Typography>
      </Box>
    </Box>
  );
};

export default TrackInfo;
