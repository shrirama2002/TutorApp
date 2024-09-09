import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const ChapterContent = ({ title, content }) => {
  return (
    <Paper elevation={3} sx={{ padding: 1 }}>
      <Typography variant="h5" component="h3" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">{content}</Typography>
    </Paper>
  );
};

export default ChapterContent;
