const bcrypt = require('bcrypt');

const User = require('../models/User');

const handleError = (e, res) => {
    console.error(e.message);
    res.json({
        error: e.message,
    });
}

async function postUser(req, res) {
    try {
        const data = req.body;
        const saltPassword = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, saltPassword);

        const newUser = new User(data);
        await newUser.save();
        res.json({
            added: newUser,
        });
    } catch (e) {
        handleError(e, res);
    }
}

async function getUsers(req, res) {
    try {
        const users = await User.find();
        res.json({
            classes: classes,
        });
    } catch (e) {
        handleError(e, res);
    }
}

async function getUser(req, res) {
    try {
        const user = await User.findById(req.params.id);
        res.json({
            user: user,
        });
    } catch (e) {
        handleError(e, res);
    }
}

async function patchUser(req, res) {
    try {
        const modifiedUser = await User.findOneAndUpdate({_id: req.params.id}, req.body);
        res.json({
            modified: modifiedUser,
        });
    } catch (e) {
        handleError(e, res);
    }
}

async function deleteUser(req, res) {
    try {
        const deletedUser = await User.findOneAndDelete({_id: req.params.id});
        res.json({
            deleted: deletedUser,
        });
    } catch (e) {
        handleError(e, res);
    }
}

module.exports = {
    postUser,
    getUsers,
    getUser,
    patchUser,
    deleteUser,
};