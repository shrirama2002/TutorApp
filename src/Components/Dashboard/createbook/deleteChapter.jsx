//import React from 'react';
import axios from '../../../axiosConfig'; // Ensure axiosConfig is set up to point to your backend

const DeleteChapter = (bookId,chapterId) => {
const confirmDelete = window.confirm('Are you sure you want to delete this Chapter? This action is irreversible.');

    // If user confirms, proceed with the delete request
    if (confirmDelete) {
      axios.delete(`books/${bookId}/chapters/${chapterId}`)
        .then(response => {
          // Notify the user of successful deletion
          alert(response.data.message || 'Book was successfully deleted.');
          // Optionally, you can refresh the book list or navigate the user
            //navigate('/dashboard');
            window.location.reload();
        
        })
        .catch(error => {
          console.error('Error deleting the book:', error);
          alert('There was an error deleting the book. Please try again.');
        });
    } else {
      // If the user cancels, do nothing
      console.log('Deletion cancelled by user.');
    }
};

export default DeleteChapter;