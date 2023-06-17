import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Documentation.css';

const DocScreen = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/about');
  };

  return (
    <div className="doc-container">
      <nav className='nav-container'>
        <button type='<a href="/home"></a>' id='botao-voltar' onClick={handleBack}>❮ Voltar
        </button>
        <h2 className="titulo-1">Documentação</h2>
      </nav>
      <div className='doc-container-2'>
        <h1>Introdução</h1>
        <p>
          Esse programa foi desenvolvido por Diego Tavares e Elykelwin Costa como trabalho final da disciplina Projeto Avançado de Software,<br/>
          ministrada pelo professor <a href='https://github.com/danieltidus'>Daniel Faustino</a>, no sexto período do curso de Bacharelado em Sistemas de Informação - CCAE - UFPB.<br/>
          Os dados apresentados são consumidos da API <a href="https://apidatalake.tesouro.gov.br/docs/custos/#/">CUSTOS API</a> e exibem os gastos público com três categorias de servidores: ativos, inativos e pensionistas por mês e ano.<br/>
          Esse projeto teve grande importância na construção de nosso conhecimento sobre o React.js.<br/>
          Abaixo segue uma breve documentação do sistema.
        </p>
        <h1>Telas</h1>
        <ul>
          <li><a href="/">Login</a></li>
          <p>Tela onde os usuários digitam os dados para realizar o acesso ao portal.</p>
          <li><a href="/forgot-password">Recuperar Acesso</a></li>
          <p>Tela onde o usuário que esquecer a senha do portal pode recuperar o acesso.</p>
          <li><a href="/create-account">Criar uma nova conta</a></li>
          <p>Tela onde um novo usuário pode realizar seu cadastro.</p>
          <li><a href="/home">Página Inicial</a></li>
          <p>Tela inicial do sistema que exibe as opções de funcionalidades.</p>
          <li><a href="/consultar-gastos-mes-pessoal-ativo">Gastos com pessoal ativo por mês</a></li>
          <p>Exibe uma tabela com os gastos públicos com servidores ativos por mês, sendo que o usuário deve<br/>
          selecionar o ano e o mês e clicar em "Pesquisar" para executar a consulta.</p>
          <li><a href="/consultar-gastos-mes-pessoal-inativo">Gastos com pessoal inativo por mês</a></li>
          <p>Exibe uma tabela com os gastos públicos com servidores inativos por mês, sendo que o usuário deve<br/>
          selecionar o ano e o mês e clicar em "Pesquisar" para executar a consulta.</p>
          <li><a href="/consultar-gastos-mes-pensionistas">Gastos com pensionistas por mês</a></li>
          <p>Exibe uma tabela com os gastos públicos com servidores pensionistas por mês, sendo que o usuário deve<br/>
          selecionar o ano e o mês e clicar em "Pesquisar" para executar a consulta.</p>
          <li><a href="/about">Documentação e Equipe</a></li>
          <p>Apresenta duas opções para que o usuário possa acessar a documentação do sistema ou os dados da equipe.</p>
          <li><a href="/documentation">Documentação</a></li>
          <p>Apresenta ao usuário uma visão documental do sistema.</p>
          <li><a href="/team">Equipe</a></li>
          <p>Apresenta ao usuário os dados da equipe envolvida no desenvolvimento do sistema.</p>
        </ul>
      </div>
    </div>

  );
};

export default DocScreen;
