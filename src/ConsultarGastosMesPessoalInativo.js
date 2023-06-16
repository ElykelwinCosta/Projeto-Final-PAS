import React, { useState } from 'react';
import axios from 'axios';
import './ConsultarGastosMesPessoalInativo.css';
import { FaSpinner } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [items, setItems] = useState([]);
  const [anoSelecionado, setAnoSelecionado] = useState('');
  const [mesSelecionado, setMesSelecionado] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const formatCurrency = (value) => {
    return parseFloat(value).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const enviar = () => {
    setIsSearchClicked(true);
    setIsLoading(true);

    axios
      .get(
        `https://apidatalake.tesouro.gov.br/ords/custos/tt/pessoal_inativo?ano=${anoSelecionado}&mes=${mesSelecionado}`
      )
      .then((response) => {
        console.log(response.data);

        const excludedColumns = ["co_natureza_juridica", "co_organizacao_n0", "co_organizacao_n1", "co_organizacao_n2", "co_organizacao_n3", "co_organizacao_n4", "co_organizacao_n5", "co_organizacao_n6", "an_lanc", "me_lanc", "in_area_atuacao", "ds_area_atuacao", "in_escolaridade", "in_faixa_etaria", "in_forca_trabalho"];
        const columnMap = {
          ds_natureza_juridica: 'Natureza Jurídica',
          ds_organizacao_n0: 'Organização nível 1',
          ds_organizacao_n1: 'Organização nível 2',
          ds_organizacao_n2: 'Organização nível 3',
          ds_organizacao_n3: 'Organização nível 4',
          ds_organizacao_n4: 'Organização nível 5',
          ds_organizacao_n5: 'Organização nível 6',
          ds_organizacao_n6: 'Organização nível 7',
          ds_escolaridade: 'Escolaridade',
          ds_faixa_etaria: 'Faixa etária',
          in_sexo: 'Sexo',
          va_custo_pessoal_inativo: 'Custo de pessoal inativo'
        };

        const filteredItems = response.data.items.map((item) => {
          const filteredItem = {};
          Object.keys(item).forEach((key) => {
            if (!excludedColumns.includes(key)) {
              const newKey = columnMap[key] || key;
              filteredItem[newKey] = key === 'va_custo_pessoal_inativo' ? formatCurrency(item[key]) : item[key];
            }
          });
          return filteredItem;
        });

        setItems(filteredItems);
      })
      .catch((error) => {
        console.error(error);
        alert('Erro ao consultar a API');
      })
      .finally(() => {
        setIsLoading(false);
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

  const navigate = useNavigate();
  const handleNavigateToHome = () => {
    navigate('/home');
  };

  return (
    <div className="gastos-mes-container">

      <nav className='nav-container'>

        <button type='<a href="/home"></a>' id='botao-voltar' onClick={handleNavigateToHome}>❮ Voltar
        </button>
        <h2 className="titulo-1">Gastos com pessoal inativo por mês</h2>


      </nav>


      <div className="select-container">
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

        <button id='botao-pesquisar' type="submit" onClick={enviar}>
          Pesquisar
        </button>
      </div>

      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner-container">
            <FaSpinner className="spinner" />
          </div>
        </div>
      )}

      {isSearchClicked && !isLoading && (
        <>
          <h2 id="resultado">Resultado</h2>
          <div className="container-resultado">
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
        </>
      )}
    </div>
  );
};

export default App;
