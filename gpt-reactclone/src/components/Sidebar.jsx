import React from 'react'
import '../App.css'

const testCode = ['resposne 1', 'response 2', 'response 3']

function Sidebar() {
  return (
    <div className='Sidebar'>
      {
        testCode.map((element, index) => {
          return <div className='sidebarText' key={index}> {element} </div>
        })
      }
    </div>
  )
}

export default Sidebar
