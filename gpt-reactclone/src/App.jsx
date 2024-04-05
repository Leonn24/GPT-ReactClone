import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Homepage from  "./pages/Homepage";
import Navbar from './components/Navbar';
import './App.css';
import './normal.css';

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

