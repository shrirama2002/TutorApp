/* 
@Component : ChapterList
@Service : This Component handles list of chapters and selecting index
@requires : should be rendered from the MainLayout
*/

import React from 'react';
import { List, ListItem, ListItemText, ListItemButton, Paper } from '@mui/material';

const ChapterList = ({ chapters, onChapterClick }) => {
  return (
    <Paper elevation={3} sx={{ padding: 1 }}>
      <List>
        {chapters.map((chapter, index) => (
          <ListItem sx={{ borderBottom: '1px solid #ccc' }} key={index} disablePadding>
            <ListItemButton  onClick={() => onChapterClick(index)}>
              <ListItemText primary={chapter.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ChapterList;
