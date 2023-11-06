import { useMemo } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import TrackInfo from './track-info';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface TrackCardProp {
  track: SpotifyApi.TrackObjectFull;
}

const TrackCard = ({ track }: TrackCardProp) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const imageUrl = useMemo(
    () => (track.album.images.length ? track.album.images[0].url : '/next.svg'),
    [track.album.images],
  );

  return (
    <Card
      sx={{
        minWidth: 275,
        display: 'flex',
        flexDirection: matches ? 'row' : 'column',
        alignItems: 'stretch',
        flexBasis: matches ? 400 : 'auto',
      }}
    >
      <CardMedia
        sx={{ height: 140, width: matches ? 140 : 'auto' }}
        image={imageUrl}
        title={track.album.name}
      />

      <CardContent sx={{ flex: 1 }}>
        <TrackInfo
          trackName={track.name}
          trackUrl={track.external_urls.spotify}
          artists={track.artists}
          album={track.album}
          durationMs={track.duration_ms}
        />
      </CardContent>
    </Card>
  );
};

export default TrackCard;
