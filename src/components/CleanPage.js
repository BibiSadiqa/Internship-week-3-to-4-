// src/components/CleanPage.js
import React from 'react';
import './CleanPage.css';

const CleanPage = () => {
  return (
    <div className="wrapper">
      {/* ✅ Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">MySite</div>
          <ul className="nav-links">
            <li><a href="#" className="active">Home</a></li>
            <a href="#" className="dropdown-toggle">AboutUs</a>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle">Services</a>
              

              <ul className="dropdown-menu">
                <li><a href="#">Web Design</a></li>
                <li><a href="#">App Development</a></li>
                <li><a href="#">Consulting</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      {/* ✅ Main Content */}
      <div className="container section">
        <div className="row">
          <div className="column">
            <h1>Welcome to My jewellery Website</h1>
            <p>Here you can see Unique variety of jewellery.</p>
            
            
          </div>
          <div className="column center">
            
          </div>
        </div>

        

       {/* ✅ Image Grid instead of Cards */}
{/* ✅ Image Row in One Line with Small Size */}
<div className="image-row">
  <div className="image-box">
    <img src="/imageReg8.jpg" alt="Image 1" />
    <button className="my-button">Click to see</button>
  </div>
  <div className="image-box">
    <img src="/imageReg3.webp" alt="Image 2" />
    <button className="my-button">Click to see</button>
  </div>
  <div className="image-box">
    <img src="/imageReg5.jpeg" alt="Image 3" />
    <button className="my-button">Click to see</button>
  </div>
</div>



        

        {/* ✅ Form */}
        <div className="section">
          <h3>Contact Form</h3>
          <form className="form">
            <label>Your Name

              <input type="text" placeholder="Enter name" />

            </label>
            <label>Your Email
              <input type="email" placeholder="Enter email" />
            </label>
            <label>Your Message
              <textarea rows="4" placeholder="Type your message..."></textarea>
            </label>
            <button type="submit" className="btn primary">Send Message</button>
          </form>
        </div>
      </div>

      {/* ✅ Footer */}
      <footer className="footer">
        &copy; 2025 MySite. All Rights Reserved.
      </footer>
    </div>
  );
};

export default CleanPage;
