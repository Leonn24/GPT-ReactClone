import React, { useState } from 'react';
import Header from '../components/Header';
import Chatbox from '../components/Chatbox';
import AnswerSection from '../components/Answer';
import OpenAI from "openai";
import '../App.css';
import '../normal.css';

function Homepage() {
  const [messages, setMessages] = useState([]);
  
  const responseGenerate = async (inputText, setInputText) => {
     return "";
  };

  return (
    <>
      <div>
        <Header />
        <Chatbox responseGenerate={responseGenerate}/>
        <AnswerSection messages={messages}/>
      </div>
    </>
  );
}

export default Homepage;
