import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import CssBaseline from '@mui/material/CssBaseline';
//import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
//import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
//import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
//import Divider from '@mui/material/Divider';
//import IconButton from '@mui/material/IconButton';
//import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
//import MenuIcon from '@mui/icons-material/Menu';
//import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
//import NotificationsIcon from '@mui/icons-material/Notifications';
//import { mainListItems, secondaryListItems } from './listItems.js';
//import SignIn from '../SignIn/SignIn.jsx';
import DisplayAllBooks from './DisplayAllBooks.jsx'

// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';
//card for books
//import RecipeReviewCard from '../Books/BookCard.js'
//import { alignProperty } from '@mui/material/styles/cssUtils';
//import BookCard from '../Books/BookCard.js';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/signup">
        Shadow Read
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// // TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function HomePage() {

  return (
    <ThemeProvider theme={defaultTheme}>
    
        <Box>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4}}>
            <Grid container spacing={3} sx={{padding: 3,gap: 2,justifyContent:"center"}}>
              {/* This is the main grid */}
              
              <DisplayAllBooks/>


              </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
