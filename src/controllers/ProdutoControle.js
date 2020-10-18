const mongoose = require('mongoose');

const Produto = mongoose.model('Produto');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const produtos = await Produto.paginate({ }, { page, limit: 5});

        return res.json(produtos);
    },

    async detalhe(req, res){
        const produto = await Produto.findById(req.params.id);

        return res.json(produto);
    },

    async criacao(req, res){
        const {url} = req.body;

        try {
            if(await Produto.findOne({url}))
                return res.status(400).send({error: 'A empresa/produto já existe. Cadastre uma nova url.'});

            const produto = await Produto.create(req.body);

            return res.json(produto)
        }catch (err){
            return res.status(400).send({erro: 'Erro de conexão com o servidor'})
        }
    },

    async atualiza(req, res){
        const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { 
            new: true }); //retorna atualizado

        return res.json(produto);
    },

    async deleta(req, res){
        await Produto.findByIdAndRemove(req.params.id);

        return res.status(200).send({message: 'Exclusão realizada com sucesso!'});

    }
}