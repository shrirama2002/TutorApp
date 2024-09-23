import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import BookCard2 from "../Books/BookCard2";
import axios from '../../axiosConfig.js'; // Import your Axios instance

export default function DisplayAllBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/books/')
      .then(response => {
        console.log(response.data); // Inspect the response data
        if (Array.isArray(response.data.books)) {
          setBooks(response.data.books);
        } else {
          console.error('Unexpected data format:', response.data);
          setBooks([]); // Set to empty array to avoid issues
        }
      })
      .catch(error => {
        console.error('There was an error fetching the books data!', error);
        setError(error); // Set error state
      })
      .finally(() => {
        setLoading(false); // Always set loading to false
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading books: {error.message}</div>;

  return (
    <Grid container spacing={2}>
      {books.length > 0 ? (
        books.map(book => (
          <Grid item xs={12} sm={6} md={4} key={book._id}>
            
            <BookCard2 bookId={book._id} isDashboard={false} />
          </Grid>
        ))
      ) : (
        <div>No books available</div>
      )}
    </Grid>
  );
}
