const mongoose = require('mongoose');

const ProdutosSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    descriçao: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    criaData: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Produto', ProdutosSchema ); //Registro de model