import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import aboutusbook from '../images/aboutusbook.jpg';
import useStyles from '../styles/styles';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  
  //handle admin login
  const handleLoginClick = () => {
    navigate('/signup');
};

  return (
    <Box className={classes.aboutUsContainer}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={5}>
          <img src={aboutusbook} alt="My Team" className={classes.largeImage} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
          Where Stories Come to Life
          </Typography>
          <Typography className={classes.aboutUsSubtitle} textAlign="justify">
          At Shadow Read, we empower authors to share their stories and provide 
          readers a platform to explore captivating narratives. Our mission is to 
          foster creativity and connection, making storytelling 
          an engaging experience for all. Join us on this literary journey!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px' }}
            onClick={handleLoginClick}
          >
            JOIN US
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;