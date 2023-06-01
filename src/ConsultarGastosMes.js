import React, { useState } from 'react';
import axios from 'axios';
import "./ConsultarGastosMes.css"

const App = () => {
  const [items, setItems] = useState([]);
  const [anoSelecionado, setAnoSelecionado] = useState('2020');
  const [mesSelecionado, setMesSelecionado] = useState('1');

  const enviar = () => {
    axios
      .get(`https://apidatalake.tesouro.gov.br/ords/custos/tt/pessoal_ativo?ano=${anoSelecionado}&mes=${mesSelecionado}`)
      .then((response) => {
        console.log(response.data);
        setItems(response.data.items);
      })
      .catch((error) => {
        console.error(error);
        alert('Erro ao consultar a API');
      });
  };

  const handleAnoChange = (e) => {
    const ano = e.target.value;
    setAnoSelecionado(ano);
  };

  const handleMesChange = (e) => {
    const mes = e.target.value;
    setMesSelecionado(mes);
  };

  return (
    <div className='gastos-mes-container'>
      <h2 className='titulo-1'>Título</h2>

      <div className='select-container'>
        <select value={anoSelecionado} onChange={handleAnoChange}>
          <option value="">Selecione o ano</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          {/* Adicione as opções de anos desejadas */}
        </select>

        <select value={mesSelecionado} onChange={handleMesChange}>
        <option value="">Selecione um mês</option>
          <option value="1">Janeiro</option>
          <option value="2">Fevereiro</option>
          <option value="3">Março</option>
          <option value="4">Abril</option>
          <option value="5">Maio</option>
          <option value="6">Junho</option>
          <option value="7">Julho</option>
          <option value="8">Agosto</option>
          <option value="9">Setembro</option>
          <option value="10">Outubro</option>
          <option value="11">Novembro</option>
          <option value="12">Dezembro</option>
        </select>

        <button type="submit" onClick={enviar}>
          Pesquisar
        </button>
      </div>

      <div className='container-resultado'>
        <h2 id='resultado'>Resultado</h2>
        <table>
          <thead>
            <tr>
              {Object.keys(items[0] || {}).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
