/* 
@Component : DisplayAllBooks
@Service : A child of HomePage - renders all books card home page
@requires : BookCard2 component from Books folder
*/

import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import axios from '../../axiosConfig.js'; // Import your Axios instance (customized)
import BookCard2 from "../Books/BookCard2.jsx";

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
            {/* Here it is calling the BookCard component for each book details fetched */}
            <BookCard2 bookId={book._id} />
          </Grid>
        ))
      ) : (
        <div>No books available</div>
      )}
    </Grid>
  );
}
