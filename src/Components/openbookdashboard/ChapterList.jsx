import React from 'react';
import { List, ListItem, ListItemText, ListItemButton, Paper } from '@mui/material';

const ChapterList = ({ chapters, onChapterClick }) => {
  return (
    <Paper elevation={3} sx={{ padding: 1 }}>
      <List>
        {chapters.map((chapter, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => onChapterClick(index)}>
              <ListItemText primary={chapter.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ChapterList;
