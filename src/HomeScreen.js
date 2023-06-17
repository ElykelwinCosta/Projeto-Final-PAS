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
    navigate('/consultar-gastos-mes-pensionistas');
  };

  const handleNavigateToScreen4 = () => {
    navigate('/about');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="home-container">
      <nav className='nav-container'>
        <button type='<a href="/home"></a>' id='botao-voltar' onClick={handleBack}>❮ Sair
        </button>
        <h2 className="titulo-1">Página Inicial</h2>
      </nav>
      
      <div className="option-button-container-home">
        <button id="option-button-1" className="option-button" onClick={handleNavigateToScreen1}>
          <span className='legenda'>Gastos com Pessoal Ativo</span>
        </button>
        <button id="option-button-2" className="option-button" onClick={handleNavigateToScreen2}>
          <span className='legenda'>Gastos com Pessoal Inativo</span>
        </button>
        <button id="option-button-3" className="option-button" onClick={handleNavigateToScreen3}>
          <span className='legenda'>Gastos com Pensionistas</span>
        </button>
        <button id="option-button-4" className="option-button" onClick={handleNavigateToScreen4}>
          <span className='legenda'>Documentação e Equipe</span>
        </button>

      </div>
    </div>

  );
};

export default HomeScreen;
