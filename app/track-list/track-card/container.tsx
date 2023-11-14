import { ReactNode } from 'react';
import Card from '@mui/material/Card';

interface TrackCardContainerProps {
  width?: string;
  children?: ReactNode;
}

const TrackCardContainer = ({
  width = 'auto',
  children,
}: TrackCardContainerProps) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        width,
        flexGrow: 1,
        backgroundColor: 'rgb(18, 18, 18)',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {children}
    </Card>
  );
};

export default TrackCardContainer;
