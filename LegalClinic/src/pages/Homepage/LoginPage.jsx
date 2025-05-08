import React, { useState } from 'react';
import * as usersAPI from '../../utilities/user-api';
import { useNavigate } from 'react-router'

import './LoginPage.css';

function LoginPage({ setUser, setProfile }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const newUser = await usersAPI.login(form)
    setUser(newUser.user)
    setProfile(newUser.profile)
    if (newUser.profile.is_lawyer) navigate("/Lawyerpage")
    if (!newUser.profile.is_lawyer) navigate("/Clientpage")
    else navigate("/home")
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="text"
          name="username"
          placeholder="username"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>

        <p className="login-footer">Don't have an account? <a href="/register">Register</a></p>
      </form>
    </div>
  );
}

export default LoginPage;
