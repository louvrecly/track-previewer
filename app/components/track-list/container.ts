import { styled } from '@mui/material/styles';
import Grid, { GridProps } from '@mui/material/Grid';

const TrackListContainer = styled(Grid)<GridProps>(({ theme }) => ({
  maxWidth: theme.spacing(128),
  flexGrow: 1,
}));

export default TrackListContainer;
