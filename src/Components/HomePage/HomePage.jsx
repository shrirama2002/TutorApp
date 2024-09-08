import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/signin');
    };

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
            <AppBar position="static" sx={{ backgroundColor: 'primary.dark' }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Shadow Read
                    </Typography>
                    <Button color="inherit" onClick={handleLoginClick}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>

            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Box
                    sx={{
                        padding: 8,
                        backgroundColor: 'primary.main',
                        color: 'common.white',
                        textAlign: 'center',
                        borderRadius: 2,
                    }}
                >
                    <Typography variant="h3" gutterBottom>
                        Welcome to Shadow Read
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Discover and Read Books Chapter-Wise
                    </Typography>
                </Box>

                <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
                    <Grid item xs={12} sm={8} md={6}>
                        <Paper sx={{ padding: 4, textAlign: 'center' }} elevation={3}>
                            <Typography variant="h4" gutterBottom>
                                Start Your Journey
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Join Shadow Read to explore a vast collection of books, shared chapter by chapter by authors around the world.
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ mt: 2 }}
                                onClick={handleLoginClick}
                            >
                                Login
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HomePage;
