import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Auth from '../components/Auth'

const Login = (props) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <h1>Login</h1>
            </div>
            <div className={'titleContainer'}>
                <h4>Don't have an account? Sign up <Link to="/signup">here</Link></h4>
            </div>
            <div className={'inputContainer'}>
                <input
                    value={username}
                    placeholder="Enter your username here"
                    className={'inputBox'}
                    onChange={(ev) => setUsername(ev.target.value)}
                />
            </div>
            <div className={'inputContainer'}>
                <input
                    value={email}
                    placeholder="Enter your email here"
                    className={'inputBox'}
                    onChange={(ev) => setEmail(ev.target.value)}
                />
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    value={password}
                    placeholder="Enter your password here"
                    className={'inputBox'}
                    onChange={(ev) => setPassword(ev.target.value)}
                />
            </div>
            <br />
            <div className={'inputContainer'}>
                <Link to="/">
                  <button>Log in</button>
                </Link>
            </div>
        </div>
    )
}

export default Login