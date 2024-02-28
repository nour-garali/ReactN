// Login.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';
import axios from 'axios';

const Login = () => {
  const history = useHistory();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', formData); // Assurez-vous que l'URL est correcte
      login(response.data.token);
      history.push('/dashboard'); // Redirigez l'utilisateur vers le tableau de bord après la connexion
    } catch (error) {
      console.error('Échec de la connexion :', error.response ? error.response.data.message : 'Erreur inconnue');
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Mot de passe:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
