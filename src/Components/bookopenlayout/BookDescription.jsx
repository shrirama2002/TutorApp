import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const BookDescription = ({ title, description }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Paper>
  );
};

export default BookDescription;
