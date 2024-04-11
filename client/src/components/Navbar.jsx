import React from 'react';
import { Link } from 'react-router-dom';
import Auth from "../../../gpt-reactclone/src/utils/auth"

const Navbar = () => {
  const authService = Auth;

  const handleLogout = () => {
    authService.logout();
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!authService.loggedIn() && (
          <>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
        {authService.loggedIn() && (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
