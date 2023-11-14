import Skeleton from '@mui/material/Skeleton';
import TrackCardContainer from './container';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const TrackCardLoading = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <TrackCardContainer width={matches ? 'calc(50% - 24px)' : 'auto'}>
      <Skeleton
        variant="rectangular"
        width={matches ? 475 : 275}
        height={matches ? 210 : 320}
      />
    </TrackCardContainer>
  );
};

export default TrackCardLoading;
