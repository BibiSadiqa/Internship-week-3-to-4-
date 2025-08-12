import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MakeRequest.css';

const Makerequest = () => {
  const location = useLocation();
  const selectedPet = location.state?.petName || '';

  const [formData, setFormData] = useState({
    adopterName: '',
    petName: selectedPet,
    reason: '',
    contact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Adoption Request Submitted:", formData);
    alert("Your adoption request has been submitted!");
  };

  return (
    <div className="request-container">
      <form className="request-form" onSubmit={handleSubmit}>
        <h2>Make Adoption Request</h2>

        <label>Adopter Name</label>
        <input type="text" name="adopterName" value={formData.adopterName} onChange={handleChange} required />

        <label>Pet Name</label>
        <input type="text" name="petName" value={formData.petName} onChange={handleChange} required />

        <label>Reason for Adoption</label>
        <textarea name="reason" value={formData.reason} onChange={handleChange} required />

        <label>Contact Info</label>
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />

       <div className="form-buttons">
  <button type="button" onClick={() => window.history.back()}>Back</button>
  <button type="submit">Submit Request</button>
</div>

      </form>
    </div>
  );
};

export default Makerequest;
