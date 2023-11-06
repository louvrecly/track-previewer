import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const TrackCard = dynamic(() => import('./track-card'));

interface TrackListProps {
  tracks: SpotifyApi.TrackObjectFull[];
}

const TrackList = ({ tracks }: TrackListProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  if (!tracks.length) {
    return (
      <Box>
        <Typography>No tracks found.</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: matches ? 'row' : 'column',
        gap: 3,
        flexWrap: 'wrap',
        justifyContent: 'centre',
      }}
    >
      {tracks.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </Box>
  );
};

export default TrackList;
