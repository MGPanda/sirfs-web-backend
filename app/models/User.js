const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const config = require('../config');
const Character = require("./Character");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        match: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    characters: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: Character,
        }
    ]
})

userSchema.method({
    checkPassword: async function (plaintextPassword) {
        return await bcrypt.compare(plaintextPassword, this.password);
    },
});

userSchema.pre('save', async function (next) {
    if (this.password) {
        this.password = await bcrypt.hash(this.password, config.server.bcrypt.rounds);
    }
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;