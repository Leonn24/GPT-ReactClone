import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Container, Typography, TextField, Button, Link } from '@mui/material';
import { palette } from '@mui/system';
import { LOGIN } from '../utils/mutation';
import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container className='textWhite' component="main" maxWidth="sm" style={{ marginTop: '8rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography component="h1" variant="h5" align="center">
        Log in to ChatGPT
      </Typography>
      <form onSubmit={handleFormSubmit} style={{ width: '100%', marginTop: '1rem' }}>
        <TextField
          sx={{ input: { color: 'white' } }}
          variant="outlined"
          margin="normal"
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formState.email}
          onChange={handleChange}
          style={{ marginBottom: '1rem' }}
          required
        />
        <TextField
          sx={{ input: { color: 'white' } }}
          variant="outlined"
          margin="normal"
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          placeholder="Enter your password"
          value={formState.password}
          onChange={handleChange}
          style={{ marginBottom: '1rem'}}
          required
        />
        {error && <Typography variant="body2" color="error" align="center">{error.message}</Typography>}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginTop: '2rem' }}
        >
          Log In
        </Button>
        <Typography variant="body2" style={{ marginTop: '2rem', textAlign: 'center' }}>
          Don't have an account? <Link href="/signup">Sign Up</Link>
        </Typography>
      </form>
    </Container>
  );
};

export default Login;
