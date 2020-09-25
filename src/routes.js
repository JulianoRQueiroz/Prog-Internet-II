const express = require('express');
const rotas = express.Router();

const ProdutoControle = require('./controllers/ProdutoControle');

//Primeira rota
rotas.get('/produtos', ProdutoControle.index);


module.exports = rotas;