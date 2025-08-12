// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderBackground from './components/HeaderBackground';
import Signup from './components/Signup';
import LoginShelter from './components/LoginShelter';
import LoginAdopter from './components/LoginAdopter';
import Dashboard from './components/Dashboard';
import Makerequest from './components/Makerequest';
import Petlist from './components/Petlist';







function App() {
  return (
    
      <Router>
      <Routes>
        <Route path="/" element={<HeaderBackground />} />
        <Route path="/signup" element={<Signup />} />
        
        
  <Route path="/login-shelter" element={<LoginShelter />} />
  <Route path="/login-adopter" element={<LoginAdopter />} />
  <Route path="/adopter-dashboard" element={<Dashboard />} />
  <Route path="/make-request" element={<Makerequest />} /> 
<Route path="/pets" element={<Petlist />} />


      </Routes>
    </Router>
      

    
  );
}

export default App;
