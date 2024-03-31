import { useState } from 'react'
import './App.css'

import MessageBox from '../components/MessageBox'
import ChatBox from '../components/ChatBox'

function App() {

  return (
    <>
      <div>
          <ChatBox/>
          <MessageBox/>
      </div>
    </>
  )
}

export default App
