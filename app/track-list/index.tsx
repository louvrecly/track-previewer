import dynamic from 'next/dynamic';
import TrackListContainer from './container';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Typography = dynamic(() => import('@mui/material/Typography'));
const TrackCard = dynamic(() => import('./track-card'));

interface TrackListProps {
  tracks: SpotifyApi.TrackObjectFull[];
}

const TrackList = ({ tracks }: TrackListProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  if (!tracks.length) {
    return (
      <TrackListContainer>
        <Typography>No tracks found.</Typography>
      </TrackListContainer>
    );
  }

  return (
    <TrackListContainer flexDirection={matches ? 'row' : 'column'}>
      {tracks.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </TrackListContainer>
  );
};

export default TrackList;
