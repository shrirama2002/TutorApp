import React from 'react';
import { Typography, Paper,Grid, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
// import EditChapter from '../createbook/editChapter';
import DeleteChapter from '../createbook/deleteChapter';

const ChapterContent = ({ title, content,bookId,chapterId }) => {

  const navigate = useNavigate();
  //const [editChapter,seteditChapter] = React.useState(false);

  //backbutton
  const handleEditClick = () => {
    console.log('Edit Chapter Button clicked')
    navigate(`/books/${bookId}/chapters/${chapterId}`)
  };

  const handleDeleteClick =() =>{
    console.log('clicked on delete chapter')
    DeleteChapter(bookId,chapterId);
  }

  return (
    <Paper elevation={3} sx={{ padding: 1 }}>
      <Grid container padding={1} justifyContent="safe center">
        <Grid container justifyContent="space-between" padding={1}>
          <Grid>
            <Button
                variant="outlined"
                color="primary"
                startIcon={<EditIcon />}
                onClick={handleEditClick}
            >
                Edit Chapter
            </Button>
          </Grid>
          <Grid>
            <Button
                variant="outlined"
                color="primary"
                startIcon={<DeleteIcon />}
                onClick={handleDeleteClick}
            >
              Delete Chapter
            </Button>
          </Grid>
        </Grid>
        <Grid item >
          <Typography variant="h5" component="h3" gutterBottom>
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">{content}</Typography>
        </Grid>
      </Grid>
      
    </Paper>
  );
};

export default ChapterContent;
