const mongoose = require('mongoose');
const bcryppt = require('bcryptjs');
 
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true,
        select: false //sem campo senha
    },
    criaData: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre('save', async function(next) {
    const hash = await bcryppt.hash(this.password, 10);
    this.password = hash;

    next();
})

mongoose.model('User', UserSchema);