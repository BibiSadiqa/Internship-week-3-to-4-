import React from 'react';
import { useNavigate } from 'react-router-dom';
import pets from './petsData';
import './petlist.css';

const Petlist = () => {
  const navigate = useNavigate();

  const handleSelect = (petName) => {
    navigate('/make-request', { state: { petName } });
  };

  return (
    <div className="dashboard-container">
      <div className="content-box">
        <div className="petlist-container">
          <h2>Available Pets for Adoption</h2>
          <div className="pet-grid">
            {pets.map(pet => (
              <div key={pet.id} className="pet-card">
                <img src={pet.image} alt={pet.name} />
                <h3>{pet.name}</h3>
                <p>{pet.description}</p>
                <button onClick={() => handleSelect(pet.name)}>Adopt {pet.name}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Petlist;
