import React, { useEffect, useState } from 'react';
import { TextField, Button, MenuItem,Grid, Typography } from '@mui/material';
import axios from '../../../axiosConfig'; // Adjust the path to your axios configuration
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';  // Import for displaying alerts
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const EditChapter = () => {
    
  const {bookId,chapterId} = useParams();

  const [chapterData, setChapterData] = useState({
    title: '',
    body: '',
    status: 'draft'
  });

  //navigation
  const navigate = useNavigate();

  //const [loading, setLoading] = useState(true);

  const [message, setMessage] = React.useState(); // State for success or error message

  // Fetch the chapter data when the component mounts
  useEffect(() => {
     axios.get(`books/${bookId}/chapters/${chapterId}`)
     .then((response)=>{
        setChapterData(response.data.chapter);
     })
        
      .catch((error) => {
        console.error('Error fetching chapter data:', error);
      }) 
  }, [bookId,chapterId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChapterData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
      axios.put(`/chapters/${chapterId}`, chapterData,{
            headers: {
              'Content-Type': 'multipart/form-data' // Important for file uploads
            }
      })
      .then(response => {
        console.log(response.data)
        setMessage({type: 'success', text: 'Book details updated successfully!' });
        //alert('Book updated successfully!');
        // navigate(`/dashboard`); // Navigate to the dashboard or any relevant page
      })
      .catch(error => {
        console.error('Error updating the book:', error);
        setMessage({ type: 'error', text: 'Please try again later.' });
        //alert('There was an error updating the book.');
      });
  };

  //backbutton
  const handleBackClick = () => {
    navigate(`/dashboard/${bookId}`);
  };
 
  return (
    <>
    <Grid container justifyContent="left" padding={1}>
    <Grid item xs={12} sm={8} md={6}>
    
      <Button
        variant="contained"
        color="primary"
        startIcon={<ArrowBackIcon />}
        onClick={handleBackClick}
      >
        Back to Chapters
      </Button>
    </Grid>
    </Grid>
    <Grid container justifyContent="center" padding={1}>
    <Grid item xs={12} sm={8} md={6}>
    <Typography variant="h5" component="h1" padding={1}>
        Edit the current Chapter
      </Typography>
    {message && (
            <Grid padding={1} sx={{ width: '100%', mt: 2 }}>
            <Alert severity={message.type} sx={{ width: '95%', mt: 2 } }>
              {message.text}
            </Alert>
            </Grid>
          )}
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Title"
        name="title"
        value={chapterData.title}
        onChange={handleChange}
        required
        margin="normal"
      />
      <TextField
        fullWidth
        label="Body"
        name="body"
        value={chapterData.body}
        onChange={handleChange}
        required
        multiline
        rows={4}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Status"
        name="status"
        select
        value={chapterData.status}
        onChange={handleChange}
        margin="normal"
      >
        <MenuItem value="draft">Draft</MenuItem>
        <MenuItem value="review">Review</MenuItem>
        <MenuItem value="public">Public</MenuItem>
      </TextField>
      <Button type="submit" variant="contained" color="primary">
        Update Chapter
      </Button>
    </form>
    </Grid>
</Grid>
    </>
  );
};

export default EditChapter;
