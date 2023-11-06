import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
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
    <Box sx={{ display: 'flex', gap: 3 }}>
      {!album.images.length ? (
        <Image src="/next.svg" width={100} height={100} alt={album.name} />
      ) : (
        <Image
          src={album.images[0].url}
          width={100}
          height={100}
          alt={album.name}
        />
      )}

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ fontSize: 15 }}>
          Album:{' '}
          <Link href={album.external_urls.spotify} target="_blank">
            {album.name}
          </Link>
        </Typography>

        <Typography sx={{ fontSize: 20 }}>
          <Link href={trackUrl} target="_blank">
            {trackName}
          </Link>
        </Typography>

        <Typography sx={{ fontSize: 10 }}>
          {trackDuration.durationInMinutes}:
          {trackDuration.remainderSeconds.toString().padStart(2, '0')}
        </Typography>

        <Typography sx={{ fontSize: 10 }}>
          By{' '}
          {!artists.length ? (
            <span>unknown artist</span>
          ) : (
            artists.map((artist, idx) => (
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
  );
};

export default TrackInfo;
