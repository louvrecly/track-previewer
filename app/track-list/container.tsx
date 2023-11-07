import { ReactNode } from 'react';
import Box from '@mui/material/Box';

interface TrackListContainerProps {
  flexDirection?: 'row' | 'column';
  children?: ReactNode;
}

const TrackListContainer = ({
  flexDirection = 'column',
  children,
}: TrackListContainerProps) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection,
        gap: 3,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        placeContent: 'center',
      }}
    >
      {children}
    </Box>
  );
};

export default TrackListContainer;
