// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';

const CustomCard = () => {
  return (
    <Card
      sx={{
        backgroundColor: '#A0D9EF',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: 400,
        margin: '20px auto',
      }}
    >
      <CardContent
        sx={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600, color: '#333' }}>
          Beautifully Styled Card
        </Typography>
        <Typography variant="body2" sx={{ color: '#555', marginTop: '10px' }}>
          This is a simple card designed using Material UI with custom colors and styling.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', paddingBottom: '20px' }}>
        <Button
          sx={{
            backgroundColor: '#A0D9EF',
            color: '#fff',
            borderRadius: '20px',
            '&:hover': {
              backgroundColor: '#B0DAE5',
            },
          }}
          variant="contained"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
