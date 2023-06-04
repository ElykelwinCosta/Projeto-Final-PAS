import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeScreen.css';

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleNavigateToScreen1 = () => {
    navigate('/screen1');
  };

  const handleNavigateToScreen2 = () => {
    navigate('/screen2');
  };

  const handleNavigateToScreen3 = () => {
    navigate('/consultar-gastos-mes');
  };

  return (
    <div className="home-container">
      <nav className='nav-container'>
        <h2 className="titulo-1">Tela Inicial</h2>
      </nav>
      
      <div className="option-button-container">
        <button id="option-button-1" className="option-button" onClick={handleNavigateToScreen1}>
          <span className='legenda'>Ir para Tela 1</span>
        </button>
        <button id="option-button-2" className="option-button" onClick={handleNavigateToScreen2}>
          <span className='legenda'>Ir para Tela 2</span>
        </button>
        <button id="option-button-3" className="option-button" onClick={handleNavigateToScreen3}>
          <span className='legenda'>Gastos com pessoal ativo</span>
        </button>
      </div>
    </div>

  );
};

export default HomeScreen;
