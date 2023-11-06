import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useMemo } from 'react';

interface TrackCardProp {
  track: SpotifyApi.TrackObjectFull;
}

const TrackCard = ({ track }: TrackCardProp) => {
  const trackDuration = useMemo(() => {
    const durationInSeconds = Math.floor(track.duration_ms / 1000);
    const durationInMinutes = Math.floor(durationInSeconds / 60);
    const remainderSeconds = durationInSeconds % 60;

    return { durationInMinutes, remainderSeconds };
  }, [track.duration_ms]);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box sx={{ display: 'flex', gap: 3 }}>
          {!track.album.images.length ? (
            <Image
              src="/next.svg"
              width={100}
              height={100}
              alt={track.album.name}
            />
          ) : (
            <Image
              src={track.album.images[0].url}
              width={100}
              height={100}
              alt={track.album.name}
            />
          )}

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ fontSize: 15 }}>
              Album:{' '}
              <Link href={track.album.external_urls.spotify} target="_blank">
                {track.album.name}
              </Link>
            </Typography>

            <Typography sx={{ fontSize: 20 }}>
              <Link href={track.external_urls.spotify} target="_blank">
                {track.name}
              </Link>
            </Typography>

            <Typography sx={{ fontSize: 10 }}>
              {trackDuration.durationInMinutes}:
              {trackDuration.remainderSeconds.toString().padStart(2, '0')}
            </Typography>

            <Typography sx={{ fontSize: 10 }}>
              By{' '}
              {!track.artists.length ? (
                <span>unknown artist</span>
              ) : (
                track.artists.map((artist, idx) => (
                  <span key={artist.id}>
                    {!!idx && ', '}
                    <Link href={artist.external_urls.spotify} target="_blank">
                      {artist.name}
                    </Link>
                  </span>
                ))
              )}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TrackCard;
