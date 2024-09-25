import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import useStyles from '../styles/styles';
import LibraryBooks from '@mui/icons-material/LibraryBooks';
import AutoStories from '@mui/icons-material/AutoStories';
import GroupIcon from '@mui/icons-material/Group';

const Section = () => {
  const classes = useStyles();

  const sectionItems = [
    {
      id: 1,
      icon: <LibraryBooks sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        'features a clean, user-friendly interface for navigating through books & chapters',
    },
    {
      id: 2,
      icon: <AutoStories sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        'can access a rich library of chapters, with authors regularly updating their works',
    },
    {
      id: 3,
      icon: <GroupIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence: 'We foster a vibrant community where authors and readers connect, share feedback, and inspire one another',
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, minHeight: '400px' }}>
      <Grid container className={classes.sectionGridContainer}>
        {sectionItems.map((item) => (
          <Grid
            item
            xs={12}
            md={3.5}
            minHeight={300}
            key={item.id}
            className={classes.sectionGridItem}
          >
            {item.icon}
            <Typography>{item.sentence}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section;