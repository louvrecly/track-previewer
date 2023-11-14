import { styled } from '@mui/material/styles';
import Toolbar, { ToolbarProps } from '@mui/material/Toolbar';

const StyledToolBar = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  margin: '0 auto',
  padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
  maxWidth: theme.spacing(128),
  gap: theme.spacing(1),
  flexWrap: 'wrap',
}));

export default StyledToolBar;
