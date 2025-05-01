import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router';
import logo from '../../assets/image1.png';
function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <div className="home-card">
        <img src={logo} alt="Legal Clinic Logo" className="home-logo" />
        <h1 className="home-title">Legal Clinic</h1>
        <p className="home-subtitle">Free Legal Support from Volunteer Lawyers</p>
        <div className="home-buttons">
          <button onClick={() => navigate('/register')}>Register</button>
          <button onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage