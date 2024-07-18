import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { Rating } from '@mui/material';

const FreelancerFifthFeature = ({ reviews, loading, error }) => {
  if (reviews) {
    console.log('Reviews:', reviews); 
  }
  return (
    <div>
      <Typography variant="h4" sx={{ mt: 8, ml: 2 }}>Reviews</Typography>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      {reviews && reviews.length > 0 ? (
        <List>
          {reviews.map(review => (
            <ListItem key={review.id}>
              <ListItemText 
                primary={`${review.reviewer_name || 'Anonymous Reviewer'}: ${review.comment}`} 
                secondary={<Rating name="read-only" value={review.rating} readOnly />} 
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1" sx={{ mt: 2, ml: 2 }}>No reviews yet</Typography>
      )}
    </div>
  );
};

export default FreelancerFifthFeature;
