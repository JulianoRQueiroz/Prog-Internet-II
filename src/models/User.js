const mongoose = require('mongoose');

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
    passaword: {
        type: String,
        require: true,
        select: false
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('User', UserSchema);