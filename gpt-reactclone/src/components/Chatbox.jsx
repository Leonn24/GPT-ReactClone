import React from 'react'
import '../App.css'
import {useState} from 'react'

function Chatbox({responseGenerate}) {
  const [inputText, setInputText] = useState('');


  return (
    <div className='textBox'>
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
