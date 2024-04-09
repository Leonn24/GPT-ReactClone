import React from 'react'
import '../App.css'
import {useState} from 'react'

var running = false;

function Chatbox({responseGenerate}) {
  const [inputText, setInputText] = useState('');
  
  addEventListener('keydown', (event) => {
    if (!running){
      running = true;
      if(event.keyCode === 13){
        event.preventDefault();
        responseGenerate(event.target.value, setInputText)
      }
    }
  });

  addEventListener('keyup', (event) => {
    running = false;
  });

  return (
    <div>
      <section className='formDiv'>
        <textarea 
        rows='5'
        className='formControl'
        placeholder='Ask Me'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <br/>
        <button
        onClick={() => responseGenerate(inputText, setInputText)}
        className='formBtn'>Generate Response</button>

      </section>
    </div>
  )
}

export default Chatbox
