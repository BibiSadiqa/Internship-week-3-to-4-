import React from 'react';
import './header.css';

const Simpleheader = () => {
  return (
   
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
    
  );
};
export default Simpleheader;
