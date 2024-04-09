import React from 'react'
import '../App.css'

const testCode = ['resposne 1', 'response 2', 'response 3']

function tester(){
  console.log('test')
}

function Sidebar() {
  return (
    <div className='Sidebar'>
      {
        testCode.map((element, index) => {
          return <div className='sidebarText' onClick={tester} key={index}> {element} </div>
        })
      }
    </div>
  )
}

export default Sidebar
