import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TrackInfo from './track-info';

interface TrackCardProp {
  track: SpotifyApi.TrackObjectFull;
}

const TrackCard = ({ track }: TrackCardProp) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
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
