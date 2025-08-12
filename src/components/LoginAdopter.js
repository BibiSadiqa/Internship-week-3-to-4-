import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Simpleheader from './Simpleheader'; // Shared styling for both



const LoginAdopter = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Adopter Login:', formData);
    alert('Adopter Logged in successfully!');
    navigate('/adopter-dashboard');
  };

  return (

<>
    <Simpleheader />


    
    <div className="login-container">
       <form className="login-form" onSubmit={handleSubmit}>
  <h2>Adopter Login </h2>
  <label>Email</label>
  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
  <label>Password</label>
  <input type="password" name="password" value={formData.password} onChange={handleChange} required />

  <div className="button-row">
    <button type="button" onClick={() => navigate(-1)}>Back</button>
    <button type="submit">Login</button>
  </div>
</form>
</div>
</>
  );
};

export default LoginAdopter;
