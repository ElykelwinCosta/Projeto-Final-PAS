const express = require('express');
const cors = require('cors');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/create-account', (req, res) => {
  const { name, email, birthdate, password } = req.body;
  const userData = { Name: name, Email: email, Birthdate: birthdate, Password: password };

  const filePath = 'data/users.csv';
  const writer = csvWriter({ sendHeaders: false }); // Não enviar o cabeçalho automaticamente

  // Verificar se o arquivo CSV já existe
  const fileExists = fs.existsSync(filePath);

  // Abrir o arquivo em modo de adição (append)
  const stream = fs.createWriteStream(filePath, { flags: 'a' });

  // Se o arquivo não existir, escrever o cabeçalho antes dos dados
  if (!fileExists) {
    writer.pipe(stream);
    writer.write(['Name', 'Email', 'Birthdate', 'Password']);
  } else {
    writer.pipe(stream, { end: false }); // Não finalizar o stream para evitar duplicação do cabeçalho
  }

  // Escrever os dados do usuário
  writer.write(userData);

  // Finalizar o stream e enviar a resposta
  writer.end();
  res.json({ message: 'Usuário salvo com sucesso!' });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
