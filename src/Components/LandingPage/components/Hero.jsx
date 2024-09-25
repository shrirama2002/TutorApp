/* 
@Component : Hero
@Service : A child of landing page - renders details to landing page
@requires : none
*/

import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import herobook from '../images/herobook.jpg';
import useStyles from '../styles/styles';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  //handle login
  const handleLoginClick = () => {
    navigate('/signin');
};

  return (
    <Box className={classes.heroBox}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
          Unlock Your Imagination with Shadow Read
          </Typography>
          <Typography variant="h6" className={classes.subtitle} textAlign="justify">
          Dive into a world of creativity and storytelling at Shadow Read. 
          Whether you're an aspiring author or an enthusiastic reader, we offer 
          a vibrant community where stories flourish. Explore captivating narratives, 
          share your own, and connect with fellow book lovers—your literary adventure starts here!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px' }}
            onClick={handleLoginClick}
          >
            GET STARTED
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={herobook} alt="My Team" className={classes.largeImage}/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;