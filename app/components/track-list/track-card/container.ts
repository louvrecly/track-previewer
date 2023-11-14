import { styled } from '@mui/material/styles';
import Card, { CardProps } from '@mui/material/Card';

const TrackCardContainer = styled(Card)<CardProps>(({ theme }) => ({
  width: '100%',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.grey[900],
}));

export default TrackCardContainer;
