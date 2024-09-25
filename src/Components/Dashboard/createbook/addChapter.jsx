/* 
@Component : Add Chapter
@Service : a page for adding new chapter to book
@requires : this component is only called from the 'dashboardMainLayout' from 'dashboard' component
*/
import React, { useState } from 'react';
import axios from '../../../axiosConfig'; // Ensure axiosConfig is set up to point to your backend
import { useParams } from 'react-router-dom';
import { TextField,Grid, Button, MenuItem, Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';  // Import for displaying alerts

const AddChapter = () => {
   // Get bookId from the route parameters
const { bookId } = useParams();

//navigation
const navigate = useNavigate();

//alert state
const [message, setMessage] = React.useState(); // State for success or error message

  const [formData, setFormData] = useState({
    title: '',
    body: '',
    status: 'draft',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setMessage(false);
  };

  const handleSubmit =  (e) => {
    e.preventDefault();

    // Add the bookId to the form data
    const chapterData = {
      title: formData.title,
      body: formData.body,
      status: formData.status,
      bookId: bookId, // Passing bookId from the prop
    };

    //posting to backend server 
    axios.post(`/books/${bookId}/chapters`, chapterData,{
            headers: {
              'Content-Type': 'multipart/form-data',
            },
     })
    .then((response) =>{
        console.log('Chapter added:', response.data);
      setMessage({type: 'success', text: 'Chapter added successfully!' });
      setFormData({
        title: '',
        body : '',
        status: ''
      });
    })
    .catch((error)=> {
      console.error('Error adding chapter:', error);
      setMessage({ type: 'error', text: 'Please try again later.' });
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
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h5" component="h1" padding={1}>
        Add a New Chapter
      </Typography>
      {/* Display success or error message */}
      {message && (
            <Grid padding={1} sx={{ width: '100%', mt: 2 }}>
            <Alert severity={message.type} sx={{ width: '95%', mt: 2 } }>
              {message.text}
            </Alert>
            </Grid>
          )}

      <TextField
        fullWidth
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        required
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        label="Body"
        name="body"
        value={formData.body}
        onChange={handleInputChange}
        required
        multiline
        rows={4}
        sx={{ mb: 3 }}
      />

      <TextField
        select
        fullWidth
        label="Status"
        name="status"
        value={formData.status}
        onChange={handleInputChange}
        required
        sx={{ mb: 3 }}
      >
        <MenuItem value="draft">Draft</MenuItem>
        <MenuItem value="review">Review</MenuItem>
        <MenuItem value="public">Public</MenuItem>
      </TextField>

      <Button type="submit" fullWidth variant="contained" color="primary">
        Add Chapter
      </Button>
    </Box>
        </Grid>
        </Grid>
</>
  );
};

export default AddChapter;
