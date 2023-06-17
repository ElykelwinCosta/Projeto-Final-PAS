import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Documentation.css';

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/about');
  };

  return (
    <div className="home-container">
      <nav className='nav-container'>
        <button type='<a href="/home"></a>' id='botao-voltar' onClick={handleBack}>❮ Voltar
        </button>
        <h2 className="titulo-1">Documentação</h2>
      </nav>
      <div>
        Aqui será inserida a documentação da API
      </div>
    </div>

  );
};

export default HomeScreen;
