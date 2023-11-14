import dynamic from 'next/dynamic';
import Grid from '@mui/material/Grid';
import TrackListContainer from './container';
import TrackCardLoading from './track-card/loading';

const Typography = dynamic(() => import('@mui/material/Typography'));
const TrackCard = dynamic(() => import('./track-card'), {
  loading: () => <TrackCardLoading />,
});

interface TrackListProps {
  tracks: SpotifyApi.TrackObjectFull[];
}

const TrackList = ({ tracks }: TrackListProps) => {
  if (!tracks.length) {
    return (
      <TrackListContainer container sx={{ placeContent: 'center' }}>
        <Typography variant="h6" align="center">
          No tracks found.
        </Typography>
      </TrackListContainer>
    );
  }

  return (
    <TrackListContainer container spacing={3}>
      {tracks.map((track) => (
        <Grid key={track.id} item xs={12} sm={6} md={4}>
          <TrackCard track={track} />
        </Grid>
      ))}
    </TrackListContainer>
  );
};

export default TrackList;
