import React from 'react';
import Chatbox from '../components/Chatbox';
import Navigation from '../components/Navigation';
import Auth from '../utils/auth';

var isLoggedIn = Auth.loggedIn();

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to ChatGPT</h1>
      {isLoggedIn ? (
        <Chatbox />) 
        : (
          <div>Please log in to access the chat function.
            <Navigation />
          </div>
          
        )}
      
    </div>
  );
};

export default Homepage;
