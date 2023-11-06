import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import dynamic from 'next/dynamic';

const TrackCard = dynamic(() => import('./track-card'));

interface TrackListProps {
  tracks: SpotifyApi.TrackObjectFull[];
}

const TrackList = ({ tracks }: TrackListProps) => {
  if (!tracks.length)
    return (
      <Box>
        <Typography>No tracks found.</Typography>
      </Box>
    );

  return (
    <Box sx={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
      {tracks.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </Box>
  );
};

export default TrackList;
