import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleConfirmar = () => {
    console.log('Email:', email);
    window.location.href = "/";
  };

  const handleCreateAccount = () => {
    navigate('/create-account');
  };

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2 className="titulo-forgot">Recuperar Acesso</h2>
        <h5>Digite seu e-mail para que possamos enviar a nova senha.</h5>
        <div className="input-container">
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="button-confirm-container">
          <button id="button-confirm" onClick={handleConfirmar}>Confirmar</button>
        </div>
        <div className="options-container-forgot">
          <p onClick={handleCreateAccount}>Criar uma nova conta</p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
