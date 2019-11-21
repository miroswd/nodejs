const express = require('express'); // Retorna uma função
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const cors = require('cors');
// Inicialização do APP
const app = express();
app.use(express.json()); // Permite o envio de dados para a aplicação no formato json

app.use(cors());
//app.use(cors(passo as configurações, quais os domínios são permitidos))

app.listen(3001) // Ouvindo a porta 3001 -- localhost:3001

// >>> node server.js

// Iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi',{useNewUrlParser: true})

/*
Passando a url de conexão com o mongodb
mongodb:// -> protocolo
localhost:27017 -> endereço
nodeapi -> nome do schema
*/

requireDir('./src/models')

/*
require('./src/models/Product'); 

Para não ter que ficar fazendo o require em todos os models
>>> npm install require-dir

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
