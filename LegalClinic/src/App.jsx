import React from 'react';
import { Routes, Route } from 'react-router';
import HomePage from './pages/Homepage/HomePage';
import RegisterPage from './pages/Homepage/RegisterPage';
import LoginPage from './pages/Homepage/LoginPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login" element={<div>Login Page</div>} />
    </Routes>
  );
}

export default App;

