import React from 'react';
import { Routes, Route } from 'react-router';
import { useState} from 'react';
import HomePage from './pages/Homepage/HomePage';
import RegisterPage from './pages/Homepage/RegisterPage';
import LoginPage from './pages/Homepage/LoginPage';
import Navbar from './components/Navbar';
import LawyerPage from './pages/LawyerPages/LawyerPage';
import ClientPage from './pages/ClientPages/ClientPage';
import { getUser } from './utilities/user-api';
import { useEffect } from 'react';
function App() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    async function checkUser() {
      try {
        const loggedInUser = await getUser();
        setUser(loggedInUser.user)
        setProfile(loggedInUser.profile)
      } catch (err) {
        setUser(null)
      }
    }
    checkUser()
  }, [])

  console.log(user, profile)

  return (
    <div>
      <Navbar user={user} profile={profile}/>
      <Routes>
        { user && profile?.is_lawyer &&
          <>
          <Route path="/*" element={<LawyerPage user={user} profile={profile} />} />
          </>
        }

        { user && !profile?.is_lawyer &&
          <>
          <Route path="/*" element={<ClientPage user={user} profile={profile} />} />
          </>
        }

        { !user &&
          <>
          <Route path="/*" element={<HomePage user={user} />} />
          <Route path="/register" element={<RegisterPage setUser={setUser} setProfile={setProfile} />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          </>
        }

      </Routes>
    </div>
  )
}

export default App;

