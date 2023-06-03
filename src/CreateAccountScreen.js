import React, { useState } from 'react';
import './CreateAccountScreen.css';
import axios from 'axios';

const CreateAccountScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleCreateAccount = () => {
    const user = {
      name,
      email,
      birthdate,
      password
    };

    // Enviar os dados do usuário para o servidor
    axios.post('http://localhost:5000/create-account', user)
      .then(response => {
        console.log(response.data.message);
        window.location.href = '/login';
      })
      .catch(error => {
        console.error('Erro ao criar o usuário:', error);
        alert('Erro ao criar o usuário. Por favor, tente novamente.');
      });
  };

  return (
    <div className="create-account-container">
      <div className="create-account-box">
        <h2 className="titulo-1">Criar uma nova conta</h2>
        <div className="input-container">
          <label>Nome:</label>
          <input type="text" value={name} placeholder='Digite seu nome' onChange={handleNameChange} />
        </div>
        <div className="input-container">
          <label>E-mail:</label>
          <input type="email" value={email} placeholder='Digite seu e-mail' onChange={handleEmailChange} />
        </div>
        <div className="input-container">
          <label>Data de Nascimento:</label>
          <input type="date" value={birthdate} onChange={handleBirthdateChange} />
        </div>
        <div className="input-container">
          <label>Senha:</label>
          <input type="password" value={password} placeholder='Digite sua senha' onChange={handlePasswordChange} />
        </div>
        <div className="input-container">
          <label>Confirmar Senha:</label>
          <input type="password" value={confirmPassword} placeholder='Digite a senha novamente' onChange={handleConfirmPasswordChange} />
        </div>
        <div className="button-create-container">
          <button onClick={handleCreateAccount}>Cadastrar</button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountScreen;
