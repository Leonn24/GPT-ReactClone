import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = (props) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <h1>Sign Up</h1>
            </div>
            <div className={'inputContainer'}>
                <input
                    value={username}
                    placeholder="Enter your username here"
                    className={'inputBox'}
                    onChange={(ev) => setUsername(ev.target.value)}
                />
                {/* <label className="errorLabel">{usernameError}</label> */}
            </div>
            <div className={'inputContainer'}>
                <input
                    value={email}
                    placeholder="Enter your email here"
                    className={'inputBox'}
                    onChange={(ev) => setEmail(ev.target.value)}
                />
                {/* <label className="errorLabel">{emailError}</label> */}
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    value={password}
                    placeholder="Enter your password here"
                    className={'inputBox'}
                    onChange={(ev) => setPassword(ev.target.value)}
                />
                {/* <label className="errorLabel">{passwordError}</label> */}
            </div>
            <br />
            <div className={'inputContainer'}>
                {/* <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} /> */}
                <Link to="/">
                  <button>Sign Up</button>
                </Link>
            </div>
        </div>
    )
}

export default Signup