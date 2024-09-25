/* 
@Component : Home Page
@Service : Renders a home page for 'user' with 'bookcards'
@requires : DisplayAllBooks Component
*/

import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import DisplayAllBooks from './DisplayAllBooks.jsx'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

//copyright renderer
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        Shadow Read
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// can remove this
const defaultTheme = createTheme();

export default function HomePage() {

  //navigation 
  const navigate = useNavigate();
  //handle log out
  const handleLogout = ()=>{
    navigate('/signin')
  }
 

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
          <Toolbar sx={{justifyContent:"right"}}>
          <Button 
          variant='outlined'
            color="secondary"
              endIcon={<LogoutIcon />}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Toolbar>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4}}>
            <Grid container spacing={3} sx={{padding: 3,gap: 2,justifyContent:"center"}}>
              
              {/* This is the main grid */}
              {/* This calls the display all books to display the cards of books */}
              <DisplayAllBooks/>

              </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
