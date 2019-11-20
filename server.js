const express = require('express'); // Retorna uma função
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Inicialização do APP
const app = express();

app.listen(3001) // Ouvindo a porta 3001 -- localhost:3001

// >>> node server.js

// Iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi',{useNewUrlParser: true})

requireDir('./src/models')

/*
require('./src/models/Product'); 

Para não ter que ficar fazendo o require em todos os models
>>> npm install require-dir

*/

/*
Passando a url de conexão com o mongodb
mongodb:// -> protocolo
localhost:27017 -> endereço
nodeapi -> nome do schema
*/

// Inserindo o primeiro registro

// const Product = mongoose.model('Product'); // A partir dessa variável, devo ter acesso ao product para input de dados

// Coringa que recebe todo tipo de requesição
app.use('/api',require('./src/routes'))


/*
app.get('/', (req,res)

get       -> Método

'/'       -> Rota raiz

(req,res) -> Função
    req // Fazendo requisição pro servidor, busca informações
    res // Resposta à requisição
*/