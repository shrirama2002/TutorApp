import React from 'react';
import { Typography, Paper } from '@mui/material';

const ChapterContent = ({ title, content,main }) => {
  return (
    <Paper elevation={3} sx={{ padding: 1 }}>
      {main && (
      <Typography variant="h5" component="h3" gutterBottom>
        {main}
      </Typography>
      )}
      <Typography variant="h5" component="h3" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">{content}</Typography>
    </Paper>
  );
};

export default ChapterContent;
