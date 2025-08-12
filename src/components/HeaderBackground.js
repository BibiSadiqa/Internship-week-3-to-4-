// src/components/HeaderBackground.js

import React from 'react';
import './HeaderBackground.css';
import { useNavigate } from 'react-router-dom';
import image from '../assests/imagecopy.png';

const HeaderBackground = () => {
  const navigate = useNavigate(); 
  return (
    <div
      className="background-container"
      style={{ backgroundImage: `url(${image})` }}
    >
      <header className="header">
        <div className="logo">MyPups</div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
          <input type="text" placeholder="Search" />
          <button>Subscribe</button>
        </nav>
      </header>

      <div className="background-content">
        <h1>Welcome to My Page</h1>
        <p>Here, You can see a great variety of pets</p>
        <div className="button-group">
           <button onClick={() => navigate('/signup')}>Sign Up</button>
           <button onClick={() => navigate('/login-shelter')}>Login as Shelter</button>
           <button onClick={() => navigate('/login-adopter')}>Login as Adopter</button>

          
          
        </div>
      </div>
    </div>
  );
};

export default HeaderBackground
