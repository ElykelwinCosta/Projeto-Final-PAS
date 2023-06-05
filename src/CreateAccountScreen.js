import React, { useState } from 'react';
import './CreateAccountScreen.css';
import axios from 'axios';

const CreateAccountScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailExists, setEmailExists] = useState(false);
  const [isMinor, setIsMinor] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handleBirthdateChange = (e) => {
    const newBirthdate = e.target.value;
    setBirthdate(newBirthdate);

    // Verificar a idade
    const currentDate = new Date();
    const selectedDate = new Date(newBirthdate);
    const ageDifference = currentDate - selectedDate;
    const ageInYears = Math.floor(ageDifference / (1000 * 60 * 60 * 24 * 365));
    setIsMinor(ageInYears < 15);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    setPasswordError(newPassword.length < 8);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    setPasswordMismatch(newConfirmPassword !== password);
  };

  const handleCreateAccount = () => {
    // Verificar se há algum erro antes de criar a conta
    if (emailExists || isMinor || passwordError || passwordMismatch) {
      return;
    }

    // Enviar os dados do usuário para o servidor
    const user = {
      name,
      email,
      birthdate,
      password
    };

    // Verificar se o email já existe no servidor
    axios.get(`http://localhost:5000/check-email?email=${email}`)
      .then(response => {
        if (response.data.exists) {
          setEmailExists(true);
        } else {
          axios.post('http://localhost:5000/create-account', user)
            .then(response => {
              console.log(response.data.message);
              window.location.href = '/login';
            })
            .catch(error => {
              console.error('Erro ao criar o usuário:', error);
              alert('Erro ao criar o usuário. Por favor, tente novamente.');
            });
        }
      })
      .catch(error => {
        console.error('Erro ao verificar o email:', error);
        alert('Erro ao verificar o email. Por favor, tente novamente.');
      });
  };

  const canCreateAccount = !emailExists && !isMinor && !passwordError && !passwordMismatch;

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
          {emailExists && <p className="error-message">Este e-mail já está cadastrado.</p>}
        </div>
        <div className="input-container">
          <label>Data de Nascimento:</label>
          <input type="date" value={birthdate} onChange={handleBirthdateChange} />
          {isMinor && <p className="error-message">Acesso permitido apenas para maiores de 15 anos.</p>}
        </div>
        <div className="input-container">
          <label>Senha:</label>
          <input type="password" value={password} placeholder='Digite sua senha' onChange={handlePasswordChange} />
          {passwordError && <p className="error-message">A senha deve ter pelo menos 8 caracteres.</p>}
        </div>
        <div className="input-container">
          <label>Confirmar Senha:</label>
          <input type="password" value={confirmPassword} placeholder='Digite a senha novamente' onChange={handleConfirmPasswordChange} />
          {passwordMismatch && <p className="error-message">As senhas não coincidem.</p>}
        </div>
        <div className="button-create-container">
          <button onClick={handleCreateAccount} disabled={!canCreateAccount}>Cadastrar</button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountScreen;
