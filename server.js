const express = require('express');
const cors = require('cors');
const fs = require('fs');
const csvParser = require('csv-parser');
const csvWriter = require('csv-write-stream');
const { useState } = require('react');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/check-email', (req, res) => {
  const email = req.query.email;

  const filePath = 'data/users.csv';

  const readStream = fs.createReadStream(filePath)
    .pipe(csvParser({ headers: ['Name', 'Email', 'Birthdate', 'Password'] }));

  let emailExists = false;

  readStream.on('data', (row) => {
    if (row.Email === email) {
      emailExists = true;
      readStream.destroy();
    }
  });

  readStream.on('end', () => {
    res.json({ exists: emailExists });
  });

  readStream.on('error', (error) => {
    console.error('Erro ao ler o arquivo CSV:', error);
    res.status(500).json({ error: 'Erro ao verificar o e-mail. Por favor, tente novamente.' });
  });
});

app.post('/create-account', (req, res) => {
  const { name, email, birthdate, password } = req.body;
  const userData = { Name: name, Email: email, Birthdate: birthdate, Password: password };

  const filePath = 'data/users.csv';
  const writer = csvWriter({ sendHeaders: false }); // Não enviar o cabeçalho automaticamente

  const [emailExists, setEmailExists] = useState(false); // Definir o estado emailExists

  // Verificar se o e-mail já existe no arquivo CSV
  const checkEmailExists = () => {
    return new Promise((resolve, reject) => {
      const emailCheckStream = fs.createReadStream(filePath)
        .pipe(csvParser({ headers: ['Name', 'Email', 'Birthdate', 'Password'] }));

      let emailExists = false;

      emailCheckStream.on('data', (row) => {
        if (row.Email === email) {
          emailExists = true;
          emailCheckStream.destroy();
        }
      });

      emailCheckStream.on('end', () => {
        setEmailExists(emailExists); // Atualizar o estado
        resolve(emailExists);
      });

      emailCheckStream.on('error', (error) => {
        reject(error);
      });
    });
  };

  // Verificar se o e-mail já existe
  checkEmailExists()
    .then((emailExists) => {
      if (emailExists) {
        res.status(400).json({ error: 'E-mail já cadastrado.' });
      } else {
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
      }
    })
    .catch((error) => {
      console.error('Erro ao verificar o e-mail:', error);
      res.status(500).json({ error: 'Erro ao verificar o e-mail. Por favor, tente novamente.' });
    });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
