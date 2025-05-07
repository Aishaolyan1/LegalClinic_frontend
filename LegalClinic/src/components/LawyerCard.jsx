import { Link } from "react-router";
import './LawyerCard.css'; 
import lawyerM from '../assets/images/lawyerM.jpg';
import lawyerF from '../assets/images/lawyerF.png';

const GENDER = {
  'm': 'male',
  'f': 'female',
}

const CITIES = {
  'j': 'Jedda',
  'r': 'Riyadh',
  'm': 'Macca',
}

const LawyerCard = ({ lawyer, onContact }) => {
  return (
    <div className="lawyer-card">
        <Link to={`/lawyers/${lawyer.id}`} >
            <img src={lawyer.gender === "m" ? lawyerM : lawyerF} alt={lawyer.name} className="lawyer-img" />
            <h3>{lawyer.user.username}</h3>
            <p>Location: {CITIES[lawyer.city]}</p>
            <button className="message-btn" onClick={() => onContact(lawyer)}>Message</button>
        </Link>
    </div>
  );
};

export default LawyerCard;
