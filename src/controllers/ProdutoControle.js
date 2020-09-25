const mongoose = require('mongoose');

const Produto = mongoose.model('Produto');

module.exports = {
    async index(req, res){
        const produtos = await Produto.find();

        return res.json(produtos);
    },
}