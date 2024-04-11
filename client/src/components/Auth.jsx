import React from 'react'
//import AuthService from './Services/AuthService'
import Login from '../pages/Login';
import Homepage from '../pages/Homepage';

const Auth = ({ token }) => {

    //isLoggedIn is a boolean value that determines if the user is allowed to access the homepage.
    //Ignore/delete the commented out lines of code if you do not need them for authentication 

    //const isLoggedIn = AuthService.isLoggedIn()
    const isLoggedIn = true;

    return (   
            isLoggedIn ? (<Homepage/>) : (<Login/>)
    )
}

export default Auth