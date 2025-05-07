import React, { useState } from 'react';
import { login } from '../../utilities/user-api';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = login(form)
    setUser(newUser.user)
    setProfile(newUser.profile)
    navigate("/")

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
