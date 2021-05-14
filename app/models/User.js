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
    checkPassword: function (plaintextPassword) {
        return bcrypt.compareSync(plaintextPassword, this.password);
    },
});

userSchema.pre('save', function (next) {
    if (this.password) {
        this.password = bcrypt.hashSync(this.password, config.server.bcrypt.rounds);
    }
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;