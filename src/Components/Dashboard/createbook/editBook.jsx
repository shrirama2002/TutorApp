import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../axiosConfig'; // Your axios configuration
import { TextField, Button, MenuItem,FormControl,InputLabel,Grid,Typography,Alert } from '@mui/material';

const EditBook = () => {
  const { bookId } = useParams(); // Assuming you're passing the bookId as a route parameter
  const navigate = useNavigate();
  const [book, setBook] = useState({
    name: '',
    description: '',
    status: '',
    coverImage: null
  });

const [message, setMessage] = React.useState(); // State for success or error message

  // Fetch the current book data
  useEffect(() => {
    axios.get(`/books/${bookId}`)
      .then(response => {
        setBook(response.data.book);
        
      })
      .catch(error => {
        console.error('Error updating book data:', error);
        
      });
  }, [bookId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setBook((prevBook) => ({
      ...prevBook,
      coverImage: e.target.files[0]
    }));
  };

  // Handle the edit action
  const handleEditClick = (e) => {
    e.preventDefault();

    // Create a form data object for file uploads
    const formData = new FormData();
    formData.append('name', book.name);
    formData.append('description', book.description);
    formData.append('status', book.status);
    if (book.coverImage) {
      formData.append('coverImage', book.coverImage);
    }

    // Send a PUT request to the backend
    axios.put(`/books/${bookId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data' // Important for file uploads
      }
    })
      .then(response => {
        setMessage({type: 'success', text: 'Book details updated successfully!' });
        alert('Book updated successfully!');
        navigate(`/dashboard`); // Navigate to the dashboard or any relevant page
      })
      .catch(error => {
        console.error('Error updating the book:', error);
        setMessage({ type: 'error', text: 'Please try again later.' });
        //alert('There was an error updating the book.');
      });
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <Typography variant="h5" component="h1">
          Update Book Details
        </Typography>
        {/* Display success or error message */}
        {message && (
            <Alert severity={message.type} sx={{ width: '100%', mt: 2 }}>
              {message.text}
            </Alert>
          )}
    <form onSubmit={handleEditClick} encType="multipart/form-data">
      <TextField
        fullWidth
        label="Book Name"
        name="name"
        value={book.name}
        onChange={handleInputChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Description"
        name="description"
        value={book.description}
        onChange={handleInputChange}
        margin="normal"
        multiline
        rows={4}
      />
      <TextField
        fullWidth
        label="Status"
        name="status"
        select
        value={book.status}
        onChange={handleInputChange}
        margin="normal"
      >
        <MenuItem value="draft">Draft</MenuItem>
        <MenuItem value="public">Public</MenuItem>
        <MenuItem value="private">Private</MenuItem>
      </TextField>
      <FormControl fullWidth margin="normal">
            <InputLabel shrink>Cover Image</InputLabel>
            <input
              type="file"
              name="coverImage"
              accept="image/*"
              onChange={handleFileChange}
              required 
              style={{ marginTop: '16px' }}
            />
          </FormControl>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: 2 }}
      >
        Save Changes
      </Button>
    </form>
  </Grid>
</Grid>
  );
};

export default EditBook;
