import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth  from '../utils/auth' 

const SignUpForm = ( props ) => {

    const [formState, setFormState] = useState({ email: "", password: "", username: "" });

    const [addUser, { error }] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const mutationResponse = await addUser({
            variables:
                { ...formState }, 
                
        });

        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

const handleChange = ( event ) => {
    const {name, value} = event.target;
    setFormState( { ...formState, [name]: value})
};

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <h1>Sign Up</h1>
            </div>
            <form onSubmit={handleFormSubmit}>
            <div className={'inputContainer'}>
                <input
                    name="username"
                    type="username"
                    id="username"
                    placeholder="Enter your username here"
                    className={'inputBox'}
                    onChange={ handleChange }
                />
                {/* <label className="errorLabel">{usernameError}</label> */}
            </div>
            <div className={'inputContainer'}>
                <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Enter your email here"
                    className={'inputBox'}
                    onChange={ handleChange }
                />
                {/* <label className="errorLabel">{emailError}</label> */}
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    name="password"
                    type="password"
                    id="password"
                    placeholder="Enter your password here"
                    className={'inputBox'}
                    onChange={ handleChange }
                />
                {/* <label className="errorLabel">{passwordError}</label> */}
            </div>
            <br />
            <div className={'inputContainer'}>
                {/* <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} /> */}
                {/* <Link to="/"></Link> */}
                    <button type='submit'>Sign Up</button>
                    {/* onClick={handleFormSubmit} */}
            </div>
            </form>
        </div>
    )
};

export default SignUpForm