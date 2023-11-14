import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import TrackCardContainer from './container';

const TrackCardLoading = () => {
  return (
    <TrackCardContainer raised>
      <Skeleton variant="rectangular" height={140} />

      <Stack spacing={1} sx={{ p: 2 }}>
        <Skeleton variant="text" sx={{ typography: 'subtitle2' }} />
        <Skeleton variant="text" sx={{ typography: 'subtitle1' }} />
        <Skeleton variant="text" sx={{ typography: 'subtitle2' }} />
      </Stack>

      <Skeleton variant="rectangular" height={54} />
    </TrackCardContainer>
  );
};

export default TrackCardLoading;
