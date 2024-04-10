import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GENERATE_RESPONSE } from '../utils/mutation';
import Auth from '../utils/auth';

const ChatBox = () => {
  const [messages, setMessages] = useState([]); // State to store chat messages
  const [message, setMessage] = useState(''); 
  const [generateResponse] = useMutation(GENERATE_RESPONSE); 

  const handleMessageSubmit = async (event) => {
    event.preventDefault();
    Auth.logout();
    if(Auth.loggedIn()){
      console.log("User is logged in");
      try {
        const { data } = await generateResponse({
          variables: { inputText: message },
        });
        const response = data.generateResponse.answer;
        setMessages((prevMessages) => [...prevMessages, { text: message, isUser: true }, { text: response, isUser: false }]);
        setMessage(''); 
      } 
      catch (error) {
        console.error('Error generating response:', error);
      }
    }
    else{
      console.log("User is not logged in");
      window.location.replace("http://localhost:3001/login");
    }
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <div>
        {/* Render chat messages */}
        {messages.map((message, index) => (
          <div key={index} className={message.isUser ? 'user-message' : 'response-message'}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit}>
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Type your message..."
          required
        />
        <br />
        <br />
        <button type="submit">Generate Response</button>
      </form>
    </div>
  );
};

export default ChatBox;
