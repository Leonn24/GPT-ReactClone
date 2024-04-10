import React from 'react';
import ChatBox from '../components/ChatBox';
import Navigation from '../components/Navigation';


const Homepage = () => {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <ChatBox />
      <Navigation />
    </div>
  );
};

export default Homepage;
