// imports
import { useNavigate, Link } from "react-router"; 
import * as usersAPI from "../utilities/user-api";

export default function Navbar({ user, setUser, profile }) {
  const navigate = useNavigate();

  function handleLogout() {
    usersAPI.logout();
    setUser(null);
    navigate("/");
  }

  return (
    <nav style={styles.nav}>
      <h2 style={styles.title}>Legal Clinic</h2>

      <div style={styles.links}>
        {/* below for the lawyer */}
        { user && profile?.is_lawyer &&
          <>
            <span style={styles.welcome}>Welcome, {user.username}</span>
            <button onClick={handleLogout} style={styles.button}>Logout</button>
          </>
        }

        {/* below for the client */}
        { user && !profile?.is_lawyer &&
          <>
            <span style={styles.welcome}>Welcome, {user.username}</span>
            <Link to="/client/add-case">Add Case</Link>
            <button onClick={handleLogout} style={styles.button}>Logout</button>
          </>
        }

        {/* below for no user */}
        { !user &&
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </>
        }

      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    background: '#eee',
    alignItems: 'center',
  },
  title: { margin: 0 },
  links: { display: 'flex', gap: '15px', alignItems: 'center' },
  link: { textDecoration: 'none', color: 'blue' },
  welcome: { fontWeight: 'bold' },
  button: { cursor: 'pointer' },
};

// for the client...
{/* <header className="client-header">
<div className="icons">
  <FaEnvelope className="icon" />
  <FaBell className="icon" />
  <div className="profile-dropdown">
    <FaUserCircle className="icon profile-icon" />
    <select>
      <option>Profile</option>
      <option>Settings</option>
      <option>Logout</option>
    </select>
  </div>
</div>
</header> */}



// this is for the lawyer...
{/* <nav className="navbar">
<div className="navbar-left">
  <span className="icon">🔔</span>
  <span className="icon">✉️</span>
  <a href="#" className="cases-link">All Cases</a>
</div>

<div className="navbar-right">
  <div className="profile" onClick={toggleDropdown}>
    <img src={profileImage} alt="Profile" className="profile-image" />
    {dropdownOpen && (
      <div className="dropdown-menu">
        <a href="#">Settings</a>
        <a href="#">Edit Profile</a>
        <a href="#">Logout</a>
      </div>
    )}
  </div>
</div>
</nav> */}