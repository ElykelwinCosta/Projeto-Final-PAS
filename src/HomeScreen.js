import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeScreen.css';

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleNavigateToScreen1 = () => {
    navigate('/consultar-gastos-mes-pessoal-ativo');
  };

  const handleNavigateToScreen2 = () => {
    navigate('/consultar-gastos-mes-pessoal-inativo');
  };

  const handleNavigateToScreen3 = () => {
    navigate('/screen3');
  };

  const handleNavigateToScreen4 = () => {
    navigate('/screen4');
  };

  const handleNavigateToScreen5 = () => {
    navigate('/screen5');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="home-container">
      <nav className='nav-container'>
        <button type='<a href="/home"></a>' id='botao-voltar' onClick={handleBack}>❮ Voltar
        </button>
        <h2 className="titulo-1">Página Inicial</h2>
      </nav>
      
      <div className="option-button-container">
        <button id="option-button-1" className="option-button" onClick={handleNavigateToScreen1}>
          <span className='legenda'>Gastos com pessoal ativo</span>
        </button>
        <button id="option-button-2" className="option-button" onClick={handleNavigateToScreen2}>
          <span className='legenda'>Gastos com pessoal inativo</span>
        </button>
        <button id="option-button-3" className="option-button" onClick={handleNavigateToScreen3}>
          <span className='legenda'>Ir para Tela 3</span>
        </button>
        <button id="option-button-4" className="option-button" onClick={handleNavigateToScreen4}>
          <span className='legenda'>Ir para Tela 4</span>
        </button>
        <button id="option-button-5" className="option-button" onClick={handleNavigateToScreen5}>
          <span className='legenda'>Ir para Tela 5</span>
        </button>

      </div>
    </div>

  );
};

export default HomeScreen;
