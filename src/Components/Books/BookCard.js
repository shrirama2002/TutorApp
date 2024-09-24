// this is not in use anymore

import * as React from 'react';
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
import { useNavigate } from 'react-router-dom';
import axios from '../../axiosConfig.js'; 

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

//-------------------------------------------------------
//code to limit the number of characters in dexcription 
const TruncatedTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: 3, // Limit to 3 lines
  whiteSpace: 'normal',
});
//-------------------------------------------------------

//code to limit the heading to one line
const TruncatedCardHeader = styled(CardHeader)({
  '& .MuiCardHeader-title': {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 1, // Limit to 1 line for title
    whiteSpace: 'normal',
  },
  '& .MuiCardHeader-subheader': {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 1, // Limit to 1 line for subheader
    whiteSpace: 'normal',
  },
});

//-------------------------------------------------------

export default function BookCard({ bookId }) {
  const [expanded, setExpanded] = React.useState(false);
  const [book, setBook] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    // Fetch book data when the component mounts
    axios.get(`/books/${bookId}`)
      .then(response => {
        //{console.log(response.data.book);} // Inspect the data structure
        setBook(response.data.book);
      })
      .catch(error => {
        console.error('There was an error fetching the book data!', error);
      });
  }, [bookId]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCardClick = () => {
    navigate(`/homepage/${bookId}`);
  };

  if (!book) {
    return <div>Loading...</div>; // Show a loading indicator while fetching data
  }

  return (
    <Card sx={{ maxWidth: 312, maxHeight: 420 }} onClick={handleCardClick}>
      {/* Ensure you have an imageUrl or use a placeholder */}
      <CardMedia
        component="img"
        height="194"
        image={book.coverImage.secure_url || 'https://via.placeholder.com/312x194'}
        alt={book.name || 'Book cover'}
      />
      <TruncatedCardHeader
        title={book.name || 'Untitled'}
        // subheader={book.status || 'Unknown ID'}
      />
      <CardContent>
        <TruncatedTypography variant="body2" color="text.secondary">
          {book.description || 'No description available'}
        </TruncatedTypography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* Additional content can be placed here */}

          {/* May be i can add number of chapters here */}
        </CardContent>
      </Collapse>
    </Card>
  );
}
