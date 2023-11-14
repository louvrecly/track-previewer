import { useMemo } from 'react';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import TrackCardContainer from './container';
import TrackInfo from './track-info';

interface TrackCardProp {
  track: SpotifyApi.TrackObjectFull;
}

const TrackCard = ({ track }: TrackCardProp) => {
  const imageUrl = useMemo(
    () => (track.album.images.length ? track.album.images[0].url : '/next.svg'),
    [track.album.images],
  );

  return (
    <TrackCardContainer raised>
      <CardMedia
        image={imageUrl}
        title={track.album.name}
        sx={{ pt: '56.25%' }}
      />

      <CardContent>
        <TrackInfo
          trackName={track.name}
          trackUrl={track.external_urls.spotify}
          artists={track.artists}
          album={track.album}
          durationMs={track.duration_ms}
        />
      </CardContent>

      <CardActions>
        {!track.preview_url ? (
          <Typography
            variant="subtitle1"
            color="common.white"
            align="center"
            sx={{ flexGrow: 1, fontWeight: 'bold' }}
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
      </CardActions>
    </TrackCardContainer>
  );
};

export default TrackCard;
