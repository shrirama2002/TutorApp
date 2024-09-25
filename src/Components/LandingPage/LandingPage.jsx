// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, Container, Box, Paper, Grid, IconButton } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import DownloadIcon from '@mui/icons-material/Download';
// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
// import BookIcon from '@mui/icons-material/Book';

// const LandingPage = () => {
//     const navigate = useNavigate();

//     const handleLoginClick = () => {
//         navigate('/signin');
//     };

//     const handleAdminLoginClick = () => {
//         navigate('/adminlogin');
//     };

//     return (
//         <Box sx={{ minHeight: '100vh', backgroundColor: 'background.paper', display: 'flex', flexDirection: 'column' }}>
//             {/* Animated Header */}
//             <AppBar position="sticky" sx={{ backgroundColor: '#1066E3' , boxShadow: 'none', py: 2, zIndex: 10 }}>
//                 <Toolbar>
//                     <Typography variant="h4" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'text.primary', animation: 'slideInLeft 1s' }}>
//                         Shadow Read
//                     </Typography>
//                     <Button color="inherit" variant="outlined" onClick={handleLoginClick} sx={{ animation: 'fadeIn 2s' }}>
//                         Login
//                     </Button>
//                 </Toolbar>
//             </AppBar>

//             {/* Hero Section */}
//             <Box
//                 sx={{
//                     position: 'relative',
//                     overflow: 'hidden',
//                     py: 12,
//                     textAlign: 'center',
//                     background: 'url(https://source.unsplash.com/random/books) center/cover no-repeat',
//                     color: 'common.white',
//                     zIndex: 1,
//                 }}
//             >
//                 {/* Gradient Overlay */}
//                 <Box
//                     sx={{
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         background: 'linear-gradient(to right top, #37050e, #63002b, #8c0058, #a70099, #a312eb)',
//                         zIndex: -1,
//                     }}
//                 />
//                 <Typography variant="h2" sx={{ fontWeight: 'bold', animation: 'fadeInUp 1.5s' }} gutterBottom>
//                     Welcome to Shadow Read
//                 </Typography>
//                 <Typography variant="h5" sx={{ animation: 'fadeInUp 2s' }} gutterBottom>
//                     Discover, Read, and Download Books Chapter-Wise
//                 </Typography>
//                 <Button
//                     variant="contained"
//                     color="secondary"
//                     size="large"
//                     endIcon={<ArrowForwardIcon />}
//                     sx={{ mt: 3, px: 5, animation: 'bounceIn 2.5s' }}
//                     onClick={handleLoginClick}
//                 >
//                     Get Started
//                 </Button>
//             </Box>

//             {/* Features Section */}
//             <Container maxWidth="lg" sx={{ flexGrow: 1, mt: 8, textAlign: 'center' }}>
//                 <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 5, color: 'primary.dark', animation: 'fadeInUp 1s' }}>
//                     Explore Your Reading Adventure
//                 </Typography>
//                 <Grid container spacing={4} justifyContent="center" sx={{ animation: 'fadeInUp 1.5s' }}>
//                     <Grid item xs={12} sm={6} md={4}>
//                         <Paper
//                             sx={{
//                                 p: 5,
//                                 backgroundColor: 'rgba(255, 255, 255, 0.8)',
//                                 borderRadius: '16px',
//                                 transition: 'transform 0.3s ease-in-out',
//                                 '&:hover': {
//                                     transform: 'scale(1.05)',
//                                 },
//                             }}
//                             elevation={4}
//                         >
//                             <BookIcon sx={{ fontSize: 50, color: 'primary.main' }} />
//                             <Typography variant="h4" sx={{ fontWeight: 'bold' }} gutterBottom>
//                                 Discover New Books
//                             </Typography>
//                             <Typography variant="body1" gutterBottom>
//                                 Browse a vast library of books published chapter-by-chapter by amazing authors.
//                             </Typography>
//                         </Paper>
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4}>
//                         <Paper
//                             sx={{
//                                 p: 5,
//                                 backgroundColor: 'rgba(255, 255, 255, 0.8)',
//                                 borderRadius: '16px',
//                                 transition: 'transform 0.3s ease-in-out',
//                                 '&:hover': {
//                                     transform: 'scale(1.05)',
//                                 },
//                             }}
//                             elevation={4}
//                         >
//                             <DownloadIcon sx={{ fontSize: 50, color: 'primary.main' }} />
//                             <Typography variant="h4" sx={{ fontWeight: 'bold' }} gutterBottom>
//                                 Download Books
//                             </Typography>
//                             <Typography variant="body1" gutterBottom>
//                                 Download your favorite books or chapters for offline reading.
//                             </Typography>
//                         </Paper>
//                     </Grid>
//                 </Grid>
//             </Container>

//             {/* Footer with Admin Login */}
//             <Box
//                 component="footer"
//                 sx={{
//                     py: 4,
//                     px: 3,
//                     mt: 'auto',
//                     background: 'linear-gradient(90deg, rgba(66,163,239,1) 0%, rgba(14,51,117,1) 14%, rgba(4,18,44,1) 28%, rgba(57,124,246,1) 86%, rgba(0,85,241,1) 100%)',
//                     color: 'common.white',
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     textAlign: 'center',
//                 }}
//             >
//                 <Typography variant="body2" sx={{ flexGrow: 1 }}>
//                     &copy; 2024 Shadow Read. All rights reserved.
//                 </Typography>
//                 <IconButton
//                     onClick={handleAdminLoginClick}
//                     sx={{
//                         color: 'common.white',
//                         border: '1px solid white',
//                         borderRadius: '50%',
//                         '&:hover': {
//                             backgroundColor: 'rgba(255, 255, 255, 0.2)',
//                             transform: 'scale(1.1)',
//                         },
//                         transition: 'all 0.3s ease-in-out',
//                     }}
//                 >
//                     <AdminPanelSettingsIcon />
//                 </IconButton>
//             </Box>
//         </Box>
//     );
// };

// export default LandingPage;
