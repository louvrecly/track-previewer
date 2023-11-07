import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchBar from './search-bar';

const NavBar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'rgba(40, 20, 50, 0.9)' }}>
      <Box>
        <Toolbar
          sx={{
            marginX: 'auto',
            paddingX: 3,
            paddingY: 1,
            maxWidth: 1024,
            gap: 1,
            flexWrap: 'wrap',
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', flexGrow: 1 }}
          >
            🎸 Track Previewer
          </Typography>

          <SearchBar />
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default NavBar;
