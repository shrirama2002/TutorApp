import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography,Card, CardContent } from '@mui/material';
import ChapterList from './ChapterList';
import ChapterContent from './ChapterContent';
import axios from '../../axiosConfig.js';

const MainLayout = ({ bookId}) => {
  const [chapters, setChapters] = useState([]);
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    axios.get(`/books/${bookId}/chapters`)
      .then(response => {
        setChapters(response.data.chapters); // Adjust according to the actual response structure
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the chapters data!', error);
        setError(error);
        setLoading(false);
      });
  }, [bookId]);

  

  const handleChapterClick = (index) => {
    setSelectedChapterIndex(index);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading chapters: {error.message}</div>;

  return (
    <Box sx={{ height: '100vh', display: 'flex' }}>
      <Grid container sx={{ height: '100%' }}>
        {chapters.length > 0 ? (
        <>
        <Grid item xs={3} sx={{ bgcolor: 'background.paper', padding: 1 }}>
          <ChapterList chapters={chapters} onChapterClick={handleChapterClick} />
        </Grid>
        <Grid item xs={9} sx={{ padding: 1 }}>
          {selectedChapterIndex === null ? (
            <div > 
              <h4>Click on any chapter to read it</h4>
            </div>
          ) : (
            <ChapterContent
              title={chapters[selectedChapterIndex].title}
              content={chapters[selectedChapterIndex].body}
            />
          )}
        </Grid>
       </> ) : (
        
       <>
      <Card sx={{ maxWidth: 420, maxHeight: 200,alignSelf:'center',margin: 'auto',backgroundColor:'aquamarine'}}>
        <Box sx={{ height: '100vh', display: 'flex' }}>
          <Grid container sx={{ height: '100%' }}>
            <Grid item xs={9} sx={{ bgcolor: 'background.paper', padding: 1,justifyItems:'center',backgroundColor:'#ffff99'}}>
              <CardContent>
              <Typography sx={{fontWeight: 500,fontSize:24}}>
                This Book Does not Contain Chapters, yet!!!
              </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Box>
      </Card>
       </>)
}
      </Grid>
    </Box>
  );
};

export default MainLayout;
