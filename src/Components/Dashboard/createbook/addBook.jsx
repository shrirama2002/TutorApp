import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Grid, Typography } from '@mui/material';
import axios from '../../../axiosConfig.js';
import Alert from '@mui/material/Alert';  // Import for displaying alerts

const AddBook = () => {
  const [bookDetails, setBookDetails] = useState({
    name: '',
    description: '',
    status: 'draft',  // default value for status
    coverImage: null,
  });

  const [message, setMessage] = React.useState(); // State for success or error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({
      ...bookDetails,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setBookDetails({
      ...bookDetails,
      coverImage: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to handle file upload
    const formData = new FormData();
    formData.append('name', bookDetails.name);
    formData.append('description', bookDetails.description);
    formData.append('status', bookDetails.status);
    if (bookDetails.coverImage) {
      formData.append('coverImage', bookDetails.coverImage); // append the image file
    }

    // Send the form data to the backend
    axios.post('/books', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      console.log('Book added successfully:', response.data);
      setMessage({type: 'success', text: 'Book added successfully!' });
      // Optionally reset the form after successful submission
      setBookDetails({
        name: '',
        description: '',
        status: 'draft',
        coverImage: null,
      });
    })
    .catch((error) => {
      console.error('There was an error adding the book!', error);
      setMessage({ type: 'error', text: 'Please try again later.' });
    });
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <Typography variant="h5" component="h1">
          Add a New Book
        </Typography>
        {/* Display success or error message */}
        {message && (
            <Alert severity={message.type} sx={{ width: '100%', mt: 2 }}>
              {message.text}
            </Alert>
          )}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Book Name"
            name="name"
            value={bookDetails.name}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            margin="normal"
            label="Description"
            name="description"
            multiline
            rows={4}
            value={bookDetails.description}
            onChange={handleChange}
            required
          />

          <FormControl fullWidth margin="normal">
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={bookDetails.status}
              onChange={handleChange}
              required
            >
              <MenuItem value="draft">Draft</MenuItem>
              <MenuItem value="public">Public</MenuItem>
              <MenuItem value="private">Private</MenuItem>
            </Select>
          </FormControl>

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
            style={{ marginTop: '20px' }}
          >
            Add Book
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default AddBook;