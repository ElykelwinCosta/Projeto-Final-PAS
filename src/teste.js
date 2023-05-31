import React from 'react';
import axios from 'axios';

const enviar = () => {
  axios.get('https://apidatalake.tesouro.gov.br/ords/custos/tt/pessoal_ativo?ano=2020', {})
    .then(response => {
      console.log(response.data);
      const items = response.data.items;
      const meLancArray = items.map(item => item.me_lanc);
      console.log(meLancArray);
    })
    .catch(error => {
      console.error(error);
      alert('Erro ao consultar a API');
    });
};

const App = () => {
  return (
    <div>
      <button type="submit" onClick={enviar}>Marx</button>
      <div id='div'></div>
    </div>
  );
};

export default App;
