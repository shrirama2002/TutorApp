/* 
@Component : Testimonials
@Service : A child of landing page - renders Testimonials to landing page
@requires : static contents , can add from DB in future
*/
import React from 'react';
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';
import { Avatar } from '@mui/material';
import useStyles from '../styles/styles';

const Testimonial = () => {
  const classes = useStyles();
  const reviews = [
    {
      id: 1,
      name: 'Person 1',
      statement:
        "Shadow Read has truly transformed my writing journey. It provides an incredible platform that connects me with readers who appreciate and engage with my stories. It's fulfilling to see my work reach an audience that values creativity and narrative.",
      image_url:
        'https://i.pinimg.com/564x/8a/01/cc/8a01cc0579be056ecc8dfa2f07bd42aa.jpg',
      position: 'Software EngAineer',
    },
    {
      id: 2,
      name: 'Person 2',
      statement:
        "As an author, Shadow Read has opened new doors for me. The platform not only showcases my work but also allows me to engage with a wider audience. It's a fantastic place to share my passion for storytelling and creativity.",
      image_url:
        'https://i.pinimg.com/564x/8a/01/cc/8a01cc0579be056ecc8dfa2f07bd42aa.jpg',
      position: 'Product Manager',
    },
    {
      id: 3,
      name: 'Person 3',
      statement:
        "I absolutely love exploring new stories on Shadow Read! It’s more than just a platform; it’s a vibrant community filled with creativity. Discovering unique tales and connecting with passionate authors makes every visit again!",
      image_url:
        'https://i.pinimg.com/564x/8a/01/cc/8a01cc0579be056ecc8dfa2f07bd42aa.jpg',
      position: 'Anonymous',
    },
  ];
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '300px',
      }}
    >
      <Grid container spacing={2}>
    
        {reviews.map((review) => (
          <Grid item sm={12} md={4} key={review.id}>
            <Card className={classes.testimonialCard} sx={{height:200}}>
              <CardContent>
                <Typography className={classes.testimonialStatement} >
                  "{review.statement}"
                </Typography>
                <Box sx={{ display: 'flex' }}>
                  <Avatar
                    src={review.image_url}
                    size="large"
                    className={classes.avatar}
                  />
                  <Box>
                    <Typography>{review.name}</Typography>
                    <Typography className={classes.testimonialPosition}>
                      {review.position}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonial;