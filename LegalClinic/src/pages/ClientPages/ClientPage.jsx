import React, { useState } from 'react';
import './ClientPage.css';
import lawyer1 from '../../assets/images/lawyer1.png';
import lawyer2 from '../../assets/images/lawyer2.png';
import lawyer3 from '../../assets/images/lawyer3.png';
import lawyer4 from '../../assets/images/lawyer5.png'; 
import { FaBell, FaEnvelope, FaUserCircle } from 'react-icons/fa';

const lawyers = [
  { id: 1, name: "Lawyer Ahmed", image: lawyer1, city: "Riyadh" },
   { id: 2, name: "Lawyer Sarah", image: lawyer2, city: "Jeddah" },
   { id: 3, name: "Lawyer Mohammed", image: lawyer3, city: "Dammam" },
   { id: 4, name: "Lawyer Layla", image: lawyer4, city: "Mecca" },
];


const ClientPage = () => {
  const [selectedLawyer, setSelectedLawyer] = useState(null);

  const handleContactClick = (lawyer) => {
    setSelectedLawyer(lawyer);
  };

  const handleCloseForm = () => {
    setSelectedLawyer(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setSelectedLawyer(null);
  };

  return (
    <div className="client-page">
      <h2 className="title">Choose the right lawyer for you</h2>

      <div className="lawyer-cards">
        {lawyers.map((lawyer) => (
          <div key={lawyer.id} className="card">
            <img src={lawyer.image} alt={lawyer.name} />
            <h3>{lawyer.name}</h3>
            <p className="city">{lawyer.city}</p> 
            <button className="contact-btn" onClick={() => handleContactClick(lawyer)}>
              Contact
            </button>
          </div>
        ))}
      </div>

      {/* Contact Form Modal */}
      {selectedLawyer && (
        <div className="contact-form-overlay">
          <div className="contact-form">
            <h3>Contact {selectedLawyer.name}</h3>
            <form onSubmit={handleSubmit}>
              <label>
                Case ID:
                <input type="text" name="caseId" required />
              </label>
              <label>
                Case Reception:
                <input type="text" name="caseReception" required />
              </label>
              <label>
                Upload File/Image:
                <input type="file" name="attachment" />
              </label>
              <label>
                Message:
                <textarea name="message" required></textarea>
              </label>
              <div className="form-buttons">
                <button type="submit">Send</button>
                <button type="button" onClick={handleCloseForm}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientPage;
