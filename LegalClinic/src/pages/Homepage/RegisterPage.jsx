import React, { useState } from 'react';
import { signup as usersAPI } from '../../utilities/user-api';
import { useNavigate } from 'react-router';
import logo from '../../assets/image2.png';
import './RegisterPage.css';

export default function SignupPage({ setUser, setProfile }) {
  const navigate = useNavigate();
  const initialState = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    role: "client"
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({
    username: '',
    password: '',
    email: '',
    confirmPassword: ''
  });

  const disabled = Object.values(errors).some(err => err !== '') || 
                   Object.values(formData).some(val => val === '');


  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  }

  function validateField(name, value) {
    const update = { ...errors };

    if (name === 'username') {
      update.username = value.length < 3 ? 'Username must be at least 3 characters' : '';
    }
    if (name === 'email') {
      update.email = !value.includes('@') ? 'Invalid email format' : '';
    }
    if (name === 'password') {
      update.password = value.length < 3 ? 'Password too short' : '';
    }
    if (name === 'confirmPassword') {
      update.confirmPassword = value !== formData.password ? 'Passwords do not match' : '';
    }

    setErrors(update);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const newUser = await usersAPI(formData);
      setUser(newUser.user)
      setProfile(newUser.profile)
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <img src={logo} alt="Logo" className="signup-logo" />
        <h2 className="signup-title">Create an Account</h2>
        <form onSubmit={handleSubmit} className="signup-form">

          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
            {errors.username && <span className="error">{errors.username}</span>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
          </div>

          <div className="form-group">
            <label>Select Role</label>
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="client">Client</option>
              <option value="lawyer">Lawyer</option>
            </select>
          </div>

          <button type="submit" disabled={disabled} className="submit-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
