/* 
@Component : DisplayAllBooks
@Service : A child of DashBoard - renders all bookcard to dashboard page
@requires : BookCard2 component from Books folder
*/

import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import BookCard2 from "../Books/BookCard2.jsx";
import axios from '../../axiosConfig.js'; // Import your Axios instance

export default function DisplayBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //gets all boks as array from backend
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
            {/* Loads the bookcard from here using bookId */}
            {/* from a single book at a time */}
            <BookCard2 bookId={book._id} isDashboard={true}/>
          </Grid>
        ))
      ) : (
        <div>No books available</div>
      )}
    </Grid>
  );
}
