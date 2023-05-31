import React from 'react';
import axios from 'axios';

const API_KEY = '5ccde342b4377d293abd891ce2e1d05c';

const enviar = () => {
  axios.get('http://api.portaldatransparencia.gov.br/api-de-dados/despesas', {
    headers: {
      'chave-api-dados': API_KEY,
    },
  })
    .then(response => {
      alert(response.data);
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
