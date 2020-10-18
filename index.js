const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Inicializando o app
const app = express();
app.use(express.json());

// Iniciando o BD (conexão)
mongoose.connect(
    'mongodb://localhost:27017/api', 
    {useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true}
);

requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes')); //Recebe as requisições api/produtos
app.use('/token', require('./src/routes')); //Recebe as requisições token/users

app.listen(3001);

