import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import BookDescription from './BookDescription';  // Import your components
import ChapterList from './ChapterList';
import ChapterContent from './ChapterContent';

const MainLayout = () => {
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(null);

  const book = {
    title: 'The Great Book',
    description: 'This is a fascinating book about great adventures.',
    chapters: [
      { title: 'Chapter 1: The Beginning', content: 'This is the content of chapter 1.' },
      { title: 'Chapter 2: The Journey', content: 'This is the content of chapter 2.' },
      { title: 'Chapter 3: The End', content: 'This is the content of chapter 3.' },
    ],
  };

  const handleChapterClick = (index) => {
    setSelectedChapterIndex(index);
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex' }}>
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={3} sx={{ bgcolor: 'background.paper', padding: 1 }}>
          <ChapterList chapters={book.chapters} onChapterClick={handleChapterClick} />
        </Grid>
        <Grid item xs={9} sx={{ padding: 1 }}>
          {selectedChapterIndex === null ? (
            <BookDescription title={book.title} description={book.description} />
          ) : (
            <ChapterContent
              title={book.chapters[selectedChapterIndex].title}
              content={book.chapters[selectedChapterIndex].content}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainLayout;
