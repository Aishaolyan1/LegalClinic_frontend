import { useState } from 'react';
import './ClientPage.css';

import * as lawyersAPI from "../../utilities/lawyer-api";

import LawyerCard from '../../components/LawyerCard';
import { useEffect } from 'react';



const ClientPage = () => {
  const [allLawyers, setAllLawyers] = useState([]);

  console.log(allLawyers)

  useEffect(() => {
    async function getAllLawyers() {
      try {
        const retrivedLawyers = await lawyersAPI.getAllLawyers();
        setAllLawyers(retrivedLawyers)
      } catch (err) {
        console.error(err)
      }
    }
    getAllLawyers();
  }, [])

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
        {allLawyers.map((lawyer) => (
          <LawyerCard key={lawyer.id} lawyer={lawyer} onContact={handleContactClick} />
        ))}
      </div>
    </div>
  );
};

export default ClientPage;


// Contact Form Modal
{/* {selectedLawyer && (
  <div className="contact-form-overlay">
    <div className="contact-form">
      <h3>Message {selectedLawyer.name}</h3>
      <form onSubmit={handleSubmit}>
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
)} */}