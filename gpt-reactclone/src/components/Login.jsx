import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [emailError, setEmailError] = useState('')
    // const [passwordError, setPasswordError] = useState('')

    const onButtonClick = () => {
        console.log('Fun log in message i want to say');
    }

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Login</div>
            </div>
            <br />
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
                <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
            </div>
        </div>
    )
}

export default Login