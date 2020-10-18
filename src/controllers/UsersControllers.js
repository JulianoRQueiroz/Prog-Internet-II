const mongoose = require('mongoose');

const User = mongoose.model('User');

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

            return res.json(user);
        }catch (err){
            return res.status(400).send({erro: 'Erro de conexão com o servidor'})
        }
    }
};