import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchBar from './search-bar';
import StyledAppBar from '../styled-app-bar';
import StyledToolBar from '../styled-tool-bar';

const NavBar = () => {
  return (
    <StyledAppBar position="sticky">
      <Box>
        <StyledToolBar>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', flexGrow: 1 }}
          >
            🎸 Track Previewer
          </Typography>

          <SearchBar />
        </StyledToolBar>
      </Box>
    </StyledAppBar>
  );
};

export default NavBar;
