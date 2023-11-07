import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TrackInfo from './track-info';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Box = dynamic(() => import('@mui/material/Box'));

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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        flexGrow: 1,
        maxWidth: matches ? 'calc(50% - 24px)' : 'unset',
        backgroundColor: 'rgb(18, 18, 18)',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          minWidth: 275,
          display: 'flex',
          flexDirection: matches ? 'row' : 'column',
          alignItems: 'stretch',
        }}
      >
        <CardMedia
          sx={{ height: 140, width: matches ? 140 : 'auto' }}
          image={imageUrl}
          title={track.album.name}
        />

        <CardContent sx={{ padding: 2, flex: 1 }}>
          <TrackInfo
            trackName={track.name}
            trackUrl={track.external_urls.spotify}
            artists={track.artists}
            album={track.album}
            durationMs={track.duration_ms}
          />
        </CardContent>
      </Box>

      <Box
        sx={{
          padding: 1,
          flexGrow: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.87)',
          display: 'flex',
          justifyContent: 'stretch',
          alignItems: 'center',
        }}
      >
        {!track.preview_url ? (
          <Typography
            sx={{ flexGrow: 1, fontWeight: 'bold', textAlign: 'center' }}
            color="white"
          >
            ⚠️ Preview not available
          </Typography>
        ) : (
          <audio
            controls
            src={track.preview_url}
            title={track.name}
            style={{ width: '100%' }}
          ></audio>
        )}
      </Box>
    </Card>
  );
};

export default TrackCard;
