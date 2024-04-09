import React, { useState } from 'react';
import Header from '../components/Header';
import Chatbox from '../components/Chatbox';
import Sidebar from '../components/Sidebar'
import AnswerSection from '../components/Answer';
import OpenAI from "openai";
import '../App.css';
import '../normal.css';

function Homepage() {
  const [messages, setMessages] = useState([]);

  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  const responseGenerate = async (inputText, setInputText) => {
    let option = {
      model: "gpt-3.5-turbo-instruct",
      prompt: 'Complete this sentence: "${inputText}"',
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    };

    let completeOptions = {
      ...option,
      prompt: inputText,
    };

    const response = await openai.completions.create(completeOptions);
    if (response.choices.length) {
      setMessages([
        {
          question: inputText,
          answer: response.choices[0].text,
        },
        ...messages,
      ]);
      setInputText('');
    }
  };

  return (
    <>
      <div className='homePageContent'>
        <Sidebar />
          <div className='chatbotContainer'>
            <Header />
            <Chatbox responseGenerate={responseGenerate} />
            <AnswerSection messages={messages} />
          </div>
      </div>
    </>
  );
}

export default Homepage;
