import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleNavigateToScreen1 = () => {
    navigate('/documentation');
  };

  const handleNavigateToScreen2 = () => {
    navigate('/team');
  };

  const handleBack = () => {
    navigate('/home');
  };

  return (
    <div className="home-container">
      <nav className='nav-container'>
        <button type='<a href="/home"></a>' id='botao-voltar' onClick={handleBack}>❮ Voltar
        </button>
        <h2 className="titulo-1">Documentação e Equipe</h2>
      </nav>
      
      <div className="option-button-container-about">
        <button id="option-button-doc" className="option-button" onClick={handleNavigateToScreen1}>
          <span className='legenda'>Documentação</span>
        </button>
        <button id="option-button-team" className="option-button" onClick={handleNavigateToScreen2}>
          <span className='legenda'>Equipe</span>
        </button>
      </div>
    </div>

  );
};

export default HomeScreen;
