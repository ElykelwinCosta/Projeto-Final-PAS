import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginScreen.css';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', password);
    window.location.href = "/home";
  };

  const handleForgotPassword = () => {
    window.location.href = "/forgot-password";
    console.log('Esqueceu sua senha?');
  };

  const handleCreateAccount = () => {
    // Lógica para lidar com a opção "Criar uma nova conta"
    navigate('/create-account');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="titulo-login">Seja bem-vindo(a)!</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="button-login-container">
          <button id="button-login" onClick={handleLogin}>Login</button>
        </div>
        <div className="options-container">
          <p onClick={handleForgotPassword}>Esqueceu sua senha?</p>
          <p onClick={handleCreateAccount}>Criar uma nova conta</p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
