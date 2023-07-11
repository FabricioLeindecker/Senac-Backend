// Importa o pacote express
const express = require('express');

// App Express
const app = express();

// Endpoint raiz
app.get('/', (request: any, response: any) => {
    response.send('Bem-vindo!')
});

// Inicia o sevidor
app.listen(3333, () => {
    console.log(`Servidor rodando com sucesso na porta 3333`)
});