const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const autenticaConfig = require('../config/autentic.json')

const User = mongoose.model('User');

function geraToken(parms = {}){
    return jwt.sign(parms, autenticaConfig.secret, {
        expiresIn: 86400, //expiração do token
    });
}

module.exports = {
    async lista(req, res) {
        const users = await User.find();

        return res.json(users);
    },

    async cria(req, res) {
        const {email} = req.body;

        try {
            if(await User.findOne({email}))
                return res.status(400).send({error: 'Usuário ja existe.'});

            const user = await User.create(req.body);

            user.password = undefined; //removendo password

            return res.json({
                user,
                token:geraToken({id: user.id}),
            });
        }catch (err){
            return res.status(400).send({erro: 'Erro de conexão com o servidor'})
        }
    },

    async autenticacao(req, res) {
        const {email, password} = req.body;

        const user = await User.findOne({email}).select('+password');

        if (!user)
            return res.status(400).send({ error: 'Usuário não encontrado'});

        if (!await bcrypt.compare(password, user.password))
            return res.status(400).send({error: 'Senha inválida'});

        user.password = undefined;

        res.send({user, token:geraToken({id: user.id})});
    }
};