import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { Container, Typography, TextField, Button } from '@mui/material';
import { ADD_USER } from '../utils/mutation';
import Auth from '../utils/auth';

const SignUpForm = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await addUser({
        variables: {
          username: formState.username,
          email: formState.email,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <Container component="main" maxWidth="sm" style={{ marginTop: '8rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography component="h1" variant="h5" align="center">
        Sign Up
      </Typography>
      <form onSubmit={handleFormSubmit} style={{ width: '100%', marginTop: '1rem'}}>
        <TextField
          sx={{input: { color:'white'}}}
          variant="outlined"
          margin="normal"
          fullWidth
          id="username"
          label="Username"
          name="username"
          value={formState.username}
          onChange={handleChange}
          style={{ marginBottom: '1rem' }}
          required
        />
        <TextField
          sx={{input: { color:'white'}}}
          variant="outlined"
          margin="normal"
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          style={{ marginBottom: '1rem' }}
          required
        />
        <TextField
          sx={{input: { color:'white'}}}
          variant="outlined"
          margin="normal"
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          value={formState.password}
          onChange={handleChange}
          style={{ marginBottom: '1rem' }}
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginTop: '2rem' }}
        >
          Sign Up
        </Button>
        <Typography variant="body2" style={{ marginTop: '2rem', textAlign: 'center' }}>
          Already have an account? <Link to="/login">Log In</Link>
        </Typography>
      </form>
    </Container>
  );
};

export default SignUpForm;
