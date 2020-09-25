const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Inicializando o app
const app = express();

// Iniciando o BD (conexão)
mongoose.connect(
    'mongodb://localhost:27017/api', 
    {useNewUrlParser: true, useUnifiedTopology:true}
);

requireDir('./src/models');

const Produto = mongoose.model('Produto');

//Primeira rota
app.get('/', (req, res) =>{
    Produto.create({ 
        titulo: 'Geek Store',
        descriçao: 'Site de venda de produtos geek', 
        url: 'http://geekzstore.com.br/'
    });


    return res.send(' Programação para internet II ');
});

app.listen(3001);

