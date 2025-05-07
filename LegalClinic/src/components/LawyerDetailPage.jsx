import "./LawyerDetailPage.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router";

import { getLawyerById } from "../utilities/lawyer-api";

export default function LawyerDetailPage() {

  const { lawyerId } = useParams();
  const navigate = useNavigate();

  const [lawyer, setLawyer] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchLawyer() {
      try {
        const data = await getLawyerById(lawyerId);
        console.log(data)
        setLawyer(data);
        console.log(lawyer)
      } catch (err) {
        console.error("Error fetching lawyer details:", err);
      }
    }
    fetchLawyer();
  }, []);


  function handleSendMessage() {
    alert(`Message sent to ${lawyer?.name}: ${message}`);
    setMessage("");
  }

  if (!lawyer) return <p>Loading lawyer details...</p>;

  return (




    <div className="lawyer-detail-container">
      <h1>{lawyer.name}</h1>
      <p><strong>Email:</strong> {lawyer.email}</p>
      <p><strong>Specialty:</strong> {lawyer.specialty || "Not specified"}</p>
      <p><strong>Phone:</strong> {lawyer.phone || "N/A"}</p>

      <textarea
        placeholder="Write your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="message-box"
      />

      <button className="send-btn" onClick={handleSendMessage}>Send</button>

      <Link to="/client" className="back-link">← Back to Client Page</Link>
    </div>
  );
}
