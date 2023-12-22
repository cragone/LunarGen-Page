// LandingPage.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const LandingPage = () => {
  return (
    <Container>
      <Typography variant="h2">Welcome to Our App</Typography>
      <Typography variant="subtitle1">
        Exciting features and benefits of our app.
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
      {/* Add more content or sections */}
    </Container>
  );
};

export default LandingPage;
