import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div style={{ marginTop: '1rem' }}>
      <Button component={Link} to="/Login" variant="contained" color="primary" style={{ marginBottom: '0.5rem', marginRight: '0.5rem' }}>
        Login
      </Button>
      <Button component={Link} to="/Signup" variant="contained" color="primary" style={{ marginBottom: '0.5rem' }}>
        Sign Up
      </Button>
    </div>
  );
};

export default Navigation;