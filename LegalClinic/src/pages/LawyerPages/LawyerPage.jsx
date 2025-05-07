import React, { useState } from 'react';
import './LawyerPage.css';
import profileImage from '../../assets/image1.png';
import { useNavigate } from "react-router";

function LawyerPage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="lawyer-page">
      <div className="main-layout">
        <div className="content">
          <h1>Welcome, Lawyer</h1>
          <p>This is your dashboard overview.</p>
        </div>

        <aside className="sidebar">
          <h3>Cases</h3>
          <ul>
            <li>Previous Cases</li>
            <li>New Cases</li>
            <li>Current Cases</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default LawyerPage;
