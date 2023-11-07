import { ReactNode } from 'react';
import Box from '@mui/material/Box';

interface HomePageContainerProps {
  children?: ReactNode;
}

const HomePageContainer = ({ children }: HomePageContainerProps) => {
  return (
    <Box
      sx={{
        marginX: 'auto',
        padding: 3,
        width: '100%',
        maxWidth: 1024,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        placeContent: 'center',
      }}
    >
      {children}
    </Box>
  );
};

export default HomePageContainer;
