import React from 'react'
import GPTLogo from '/assets/images/ChatGPT-Logo.png'

function Header() {
  return (
    <div className='header'>
        <div className='header-sub'>
            <h1 className='header-title'>ChatGPT</h1>
            <img src={GPTLogo} alt='ChatGPT Logo' className='logo-image' />
            <br/>
            <p className='header-subtext'>
                Welcome to ChatGPT, An AI language model developed by OpenAI!
            </p>
        </div>
      <br/>
    </div>
  )
}

export default Header
