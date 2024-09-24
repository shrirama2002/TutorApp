import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
//import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from '../../../axiosConfig';
import Alert from '@mui/material/Alert';  // Import for displaying alerts
//import Dashboard from '../Dashboard';
import { Link } from 'react-router-dom';


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

//validation sample function for now
// function myValidation(data){
//   if(data.get('email')!=='abc' || data.get('password')!=='123')
//   return false
// }
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function AdminLogin() {

  const [message, setMessage] = React.useState(); // State for success or error message
  const navigate = useNavigate();

  //admin access control
  //const [isAdmin,setisAdmin] = React.useState(false);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      email: data.get('email'),
      password: data.get('password')
    };
  console.log(formData);
    
    axios.get(`/auth/login/${formData.email}/${formData.password}`)
      .then(response => {
        //{console.log(response.data.book);} // Inspect the data structure
        console.log('user detailes fetched from login')
        console.log(response);
        setMessage({type: 'success', text: 'Sign in successful!' });
        //setisAdmin(true);
        navigate(`/dashboard`);
      })
      .catch(error => {
        console.error('There was an error verifying user email and password!', error);
        setMessage({ type: 'error', text: 'Either User Id or Password is Wrong!!! Try Again.' });
      });

    
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Grid container justifyContent="center" padding={1}>
            <Grid>
                <Typography component="h1" variant="h4" color="primary">
                     Admin Login Page
                </Typography>
            </Grid>
          </Grid>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {message && (
            <Alert severity={message.type} sx={{ width: '100%', mt: 2 }}>
              {message.text}
            </Alert>
          )}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
    
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="./signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}