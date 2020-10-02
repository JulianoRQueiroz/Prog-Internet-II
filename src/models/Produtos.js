const mongoose = require('mongoose');
const mongoosePaginete = require('mongoose-paginate');

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

ProdutosSchema.plugin(mongoosePaginete);

mongoose.model('Produto', ProdutosSchema ); //Registro de model