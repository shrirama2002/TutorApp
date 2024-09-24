import React,{useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
//import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import axios from '../../axiosConfig.js';
import Button from '@mui/material/Button';
import { Tooltip } from '@mui/material';

// Define styled components
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const TruncatedTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: 3, 
  whiteSpace: 'normal',
});

const TruncatedCardHeader = styled(CardHeader)({
  '& .MuiCardHeader-title': {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 1,
    whiteSpace: 'normal',
  },
  '& .MuiCardHeader-subheader': {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 1,
    whiteSpace: 'normal',
  },
});

// BookCard component
export default function BookCard2({ bookId, isDashboard }) {
  const [expanded, setExpanded] = React.useState(false);
  const [book, setBook] = React.useState(null);
  const navigate = useNavigate();

  
  useEffect( ()=>{
    // Fetch book data when the component mounts
    axios.get(`/books/${bookId}`)
      .then(response => {
        setBook(response.data.book);
      })
      .catch(error => {
        console.error('There was an error fetching the book data!', error);
      });
  },[bookId]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCardClick = () => {
    //conditional rendering of paths/routes
    if (!isDashboard) navigate(`/HomePage/${bookId}`);
  };

  const handleAddClick = () => {
    console.log("Add chapter clicked");
    navigate(`/dashboard/${bookId}`);
  };

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this book? This action is irreversible.');

    // If user confirms, proceed with the delete request
    if (confirmDelete) {
      axios.delete(`/books/${bookId}`)
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

  const handleEditClick = () => {
    console.log("Edit book clicked");
    // Edit book logic here
    navigate(`/EditBook/${bookId}`)
  };

  if (!book) {
    return <div>Loading...</div>; // Show a loading indicator while fetching data
  }

  return (
    <Card sx={{ maxWidth: 312, maxHeight: 420 }} onClick={handleCardClick}>
      <CardMedia
        component="img"
        height="194"
        image={book.coverImage.secure_url || 'https://via.placeholder.com/312x194'}
        alt={book.name || 'Book cover'}
      />
      <TruncatedCardHeader
        title={book.name || 'Untitled'}
      />
      <CardContent>
        <TruncatedTypography variant="body2" color="text.secondary">
          {book.description || 'No description available'}
        </TruncatedTypography>
      </CardContent>
      <CardActions disableSpacing>
        {!isDashboard && (
            <>
         <Tooltip title="favorites">  
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        </Tooltip> 
        <Tooltip title="share">
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </Tooltip>
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Tooltip title="Click to Read">
          <ExpandMoreIcon />
          </Tooltip>
        </ExpandMore>

            </>
        )}

        {/* Conditionally render buttons based on whether it is from Dashboard */}
        {isDashboard && (
          <>
          <Tooltip title="Edit Book">
            <IconButton aria-label="edit book" onClick={handleEditClick}>
              <EditIcon />
            </IconButton>
            </Tooltip>
            <Tooltip title="Delete Book">
            <IconButton aria-label="delete book" onClick={handleDeleteClick}>
              <DeleteIcon />
            </IconButton>
            </Tooltip>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleAddClick}
                style={{ marginLeft: 'auto',height: 30,width:150 }}
            >
            Add Chapters
            </Button>
          </>
        )}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* Additional content can be placed here */}
        </CardContent>
      </Collapse>
    </Card>
  );
}
