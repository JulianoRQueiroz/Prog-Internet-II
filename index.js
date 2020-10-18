const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

//Inicializando o app
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o BD (conexão)
mongoose.connect(
    'mongodb://localhost:27017/api', 
    {useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true}
);

requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes')); //Recebe as requisições api/produtos
app.use('/token', require('./src/routes')); //Recebe as requisições token/users

app.listen(process.env.PORT || 3001);

