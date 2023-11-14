import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

const HomePageContainer = styled(Box)<BoxProps>(({ theme }) => ({
  margin: '0 auto',
  padding: theme.spacing(3),
  width: '100%',
  maxWidth: theme.spacing(1024),
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  placeContent: 'center',
}));

export default HomePageContainer;
