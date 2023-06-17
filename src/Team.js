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
        <h2 className="titulo-1">Equipe</h2>
      </nav>
      <div className='container-team'>
        <div class='dado'>
          <img src="https://avatars.githubusercontent.com/u/88664699?v=4" alt="" />
          <p>
          Nome: Diego Tavares <br/>
          E-mail:diego.querino@dcx.ufpb.br <br/>
          Github: <a href="https://github.com/DiegoTav">github.com/DiegoTav</a>  
          </p>
        </div>
        <div class='dado'>
          <img src="https://avatars.githubusercontent.com/u/54638166?v=4" alt="" />
          <p>
          Nome: Elykelwin Alves Costa <br/>
          E-mail: elykelwin.alves@dcx.ufpb.br <br/>
          Github: <a href="https://github.com/ElykelwinCosta">github.com/ElykelwinCosta</a>  <br/>
          </p>
        </div>
      </div>
    </div>

  );
};

export default HomeScreen;
