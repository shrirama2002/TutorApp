import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography,Card, CardContent } from '@mui/material';
import ChapterList from './ChapterList.jsx';
import ChapterContent from './ChapterContent.jsx';
import axios from '../../../axiosConfig.js';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';

const DashboardMainLayout = ({ bookId,isDashboard}) => {
const [chapters, setChapters] = useState([]);
const [selectedChapterIndex, setSelectedChapterIndex] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const navigate = useNavigate();

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

  const handleBackClick = () => {
    navigate('/dashboard');
  };

  const handleAddNewChapter = () => {
    navigate(`/books/${bookId}/addchapter`);
  };


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading chapters: {error.message}</div>;

  return (
    <> 
    <Grid container justifyContent="space-between" padding={2}>
    <Grid>
    <Button
      variant="contained"
      color="primary"
      startIcon={<ArrowBackIcon />}
      onClick={handleBackClick}
    >
      Back to Dashboard
    </Button>
    </Grid>
    <Grid >
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      onClick={handleAddNewChapter}
    >
      Add New Chapters
    </Button>
    </Grid>
    </Grid>
    
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
            <>
            
            <ChapterContent
              main={isDashboard}
              title={chapters[selectedChapterIndex].title}
              content={chapters[selectedChapterIndex].body}
            />
            </>
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
    </>
  );
};

export default DashboardMainLayout;
