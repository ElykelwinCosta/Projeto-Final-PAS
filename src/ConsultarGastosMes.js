import React, { useState, useEffect } from 'react';
import './ConsultarGastosMes.css';

const ConsultarGastosCidade = () => {
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [cidadeSelecionada, setCidadeSelecionada] = useState('');
  const [gastos, setGastos] = useState([]);
  
  // Função para buscar a lista de estados da API
  const buscarEstados = async () => {
    try {
      // Faça a chamada à API para obter a lista de estados
      var requisicao = new XMLHttpRequest();
      requisicao.addEventListener("load", listener);
      requisicao.open("GET", "http://api.portaldatransparencia.gov.br/api-de-dados/orgaos-siafi?pagina=1");
      requisicao.setRequestHeader("chave-api-dados", "1d5r8yt963h2v4g5h6j3k138sbfiec21");
      requisicao.send();
  
      function listener() {
        console.log(requisicao.responseText);
      }

    } catch (error) {
      console.error('Erro ao buscar estados:', error);
    }
  };
  
  // Função para buscar a lista de cidades com base no estado selecionado
  const buscarCidades = async (estado) => {
    try {
      // Faça a chamada à API passando o estado como parâmetro para obter a lista de cidades
      const response = await fetch(`URL_DA_API/cidades?estado=${estado}`);
      const data = await response.json();
      setCidades(data);
    } catch (error) {
      console.error('Erro ao buscar cidades:', error);
    }
  };

  // Função para buscar os gastos da cidade selecionada
  const buscarGastos = async (cidade) => {
    try {
      // Faça a chamada à API passando a cidade como parâmetro para obter os gastos
      const response = await fetch(`URL_DA_API/gastos?cidade=${cidade}`);
      const data = await response.json();
      setGastos(data);
    } catch (error) {
      console.error('Erro ao buscar gastos:', error);
    }
  };

  // Função executada quando o estado selecionado é alterado
  const handleEstadoChange = (e) => {
    const estado = e.target.value;
    setEstadoSelecionado(estado);
    setCidadeSelecionada(''); // Reinicia a cidade selecionada ao alterar o estado
    buscarCidades(estado);
  };

  // Função executada quando a cidade selecionada é alterada
  const handleCidadeChange = (e) => {
    const cidade = e.target.value;
    setCidadeSelecionada(cidade);
    buscarGastos(cidade);
  };

  // UseEffect para buscar os estados ao carregar a tela
  useEffect(() => {
    buscarEstados();
  }, []);

  return (
    <div className="gastos-publicos-container">
      <h2 className="titulo-1">Consultar Gastos Públicos por Cidade</h2>

      {/* Seleção de Estado */}
      <div className="select-container">
        <select value={estadoSelecionado} onChange={handleEstadoChange}>
          <option value="">Selecione um estado</option>
          {estados.map((estado) => (
            <option key={estado.id} value={estado.sigla}>
              {estado.nome}
            </option>
          ))}
        </select>

        {/* Seleção de Cidade */}
        <select value={cidadeSelecionada} onChange={handleCidadeChange}>
          <option value="">Selecione uma cidade</option>
          {cidades.map((cidade) => (
            <option key={cidade.id} value={cidade.nome}>
              {cidade.nome}
            </option>
          ))}
        </select>
      </div>

      {/* Filtros */}
      {/* Adicione aqui os filtros desejados */}

      {/* Resultados */}
      
      <h3>Resultados</h3>

      {/* Lista de Gastos */}
      <ul>
        {gastos.map((gasto) => (
          <li key={gasto.id}>{gasto.descricao}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultarGastosCidade;