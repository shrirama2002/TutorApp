/* 
@Component : Footer
@Service : A child of landing page - renders a footer to landing page - conatins admin login button
@requires : none
*/

import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { IconButton } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import useStyles from '../styles/styles';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const date = new Date().getFullYear();
  const classes = useStyles();

  //navigation
  const navigate = useNavigate();
  
  //handle admin login
  const handleAdminLoginClick = () => {
    navigate('/adminlogin');
};

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.footerContainer}>
      
      <Typography className={classes.footerText}>
        Provided by{' '}
        <Link href="/" underline="none">
          Shadow Read
        </Link>
      </Typography>
      <Typography className={classes.footerDate}>{date}</Typography>

        
      <IconButton
                    onClick={handleAdminLoginClick}
                    sx={{
                        color: 'inherit',
                        border: '1px solid white',
                        borderRadius: '50%',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            transform: 'scale(1.1)',
                        },
                        transition: 'all 0.3s ease-in-out',
                        
                    }}
                  
      >
            <AdminPanelSettingsIcon />
      </IconButton>
   
      
    </Box>
  );
};

export default Footer;