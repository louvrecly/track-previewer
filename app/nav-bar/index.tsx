import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchBar from './search-bar';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <AppBar position="static" sx={{ marginX: 'auto', maxWidth: 1024 }}> */}
      <AppBar position="static">
        <Box sx={{}}>
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
    </Box>
  );
};

export default NavBar;
