import { styled } from '@mui/material/styles';
import AppBar, { AppBarProps } from '@mui/material/AppBar';

const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: `${theme.palette.secondary.dark}AA`,
}));

export default StyledAppBar;
