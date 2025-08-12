import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // We'll style it separately

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    contact: '',
    role: 'Adopter',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup Data:', formData);
    // Send data to backend here
    alert('Signed Up Successfully!');
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>SignUp</h2>

        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <label>Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />

        <label>Contact no</label>
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />

        <label>Role</label>
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="Adopter">Adopter</option>
          <option value="Shelter">Shelter</option>
        </select>

        <div className="signup-buttons">
          <button type="button" onClick={() => navigate(-1)}>Back</button>
          <button type="submit">SignUp</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
