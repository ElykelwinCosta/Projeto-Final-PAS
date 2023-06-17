import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Team.css';

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
      <div className='container-team'>
        <div id='dados-diego'>
          Nome:
          E-mail:
          Github:
        </div>
        <div id='dados-elykelwin'>
          Nome: Elykelwin Alves Costa
          E-mail: elykelwin.alves@dcx.ufpb.br
          Github: github.com/ElykelwinCosta
        </div>
      </div>
    </div>

  );
};

export default HomeScreen;
