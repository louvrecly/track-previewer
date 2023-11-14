import { useMemo } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StyledLink from '../../styled-link';

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
    <Stack spacing={1}>
      <Typography variant="subtitle2">
        Album:{' '}
        <StyledLink
          href={album.external_urls.spotify}
          target="_blank"
          sx={{ fontWeight: 'bold' }}
        >
          {album.name}
        </StyledLink>
      </Typography>

      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
        <StyledLink href={trackUrl} target="_blank">
          {trackName}
        </StyledLink>
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="subtitle2">
          By{' '}
          {!artists.length ? (
            <span>unknown artist</span>
          ) : (
            artists.map((artist, idx) => (
              <span key={artist.id}>
                {!!idx && ', '}
                <StyledLink
                  href={artist.external_urls.spotify}
                  target="_blank"
                  sx={{ fontWeight: 'bold' }}
                >
                  {artist.name}
                </StyledLink>
              </span>
            ))
          )}
        </Typography>

        <Typography variant="subtitle2">
          {trackDuration.durationInMinutes.toString().padStart(2, '0')}:
          {trackDuration.remainderSeconds.toString().padStart(2, '0')}
        </Typography>
      </Box>
    </Stack>
  );
};

export default TrackInfo;
