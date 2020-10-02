const express = require('express');
const rotas = express.Router();

const ProdutoControle = require('./controllers/ProdutoControle');

//Primeira rota
rotas.get('/produtos', ProdutoControle.index);
rotas.get('/produtos/:id', ProdutoControle.detalhe);
rotas.post('/produtos', ProdutoControle.criacao);
rotas.put('/produtos/:id', ProdutoControle.atualiza);
rotas.delete('/produtos/:id', ProdutoControle.deleta);


module.exports = rotas;