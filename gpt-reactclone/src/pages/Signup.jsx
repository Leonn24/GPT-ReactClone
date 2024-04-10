import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutation';
import Auth  from '../utils/auth' 

const SignUpForm = ( props ) => {

    const [formState, setFormState] = useState({username: '', email: '', password:''});

    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables:
                {
                  username: formState.username,
                  email: formState.email,
                  password: formState.password,
                  // history: formState.history
                }, 
                
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

const handleChange = (event) => {
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
                    placeholder="Enter your username here"
                    className={'inputBox'}
                    onChange={handleChange}
                />
            </div>
            <div className={'inputContainer'}>
                <input
                    name="email"
                    placeholder="Enter your email here"
                    className={'inputBox'}
                    onChange={ handleChange }
                />
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    name="password"
                    placeholder="Enter your password here"
                    className={'inputBox'}
                    onChange={ handleChange }
                />
            </div>
            <br />
            <div className={'inputContainer'}>
                    <button type='submit'>Sign Up</button>
            </div>
            </form>
        </div>
    )
};

export default SignUpForm

