const express = require('express');
const rotas = express.Router();

const ProdutoControle = require('./controllers/ProdutoControle');
const UserController = require('./controllers/UsersControllers');

//Primeira rota
rotas.get('/produtos', ProdutoControle.index);
rotas.get('/produtos/:id', ProdutoControle.detalhe);
rotas.post('/produtos', ProdutoControle.criacao);
rotas.put('/produtos/:id', ProdutoControle.atualiza);
rotas.delete('/produtos/:id', ProdutoControle.deleta);

rotas.get('/users', UserController.lista);
rotas.post('/users', UserController.cria);


module.exports = rotas;