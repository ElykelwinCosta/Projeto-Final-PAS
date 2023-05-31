const express = require('express');
const axios = require('axios');

const app = express();
const port = 5001;

app.get('/api/orgaos-siafi', async (req, res) => {
  try {
    const response = await axios.get('http://api.portaldatransparencia.gov.br/api-de-dados/orgaos-siafi?pagina=1', {
      headers: {
        'chave-api-dados': '1d5r8yt963h2v4g5h6j3k138sbfiec21',
      },
    });
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao consultar a API');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
