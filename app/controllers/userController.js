const User = require('../models/User');

const handleError = (e, res) => {
    console.error(e.message);
    res.json({
        error: e.message,
    });
}

async function postUser(req, res) {
    try {
        const newUser = new User(req.body);
        const checkUser = await User.findOne({
            email: newUser.email,
        });

        if (checkUser && checkUser.email === newUser.email) {
            res.json({
                error: true,
                user: newUser.email
            });
        } else {
            await newUser.save();
            res.json({
                added: newUser,
            });
        }
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

/**
 * @param {String} email
 * @returns {Promise}
 */
async function getUserByEmail(email) {
    return User.findOne({email: email});
}

async function putUser(req, res) {
    try {
        const modifiedUser = await User.findOneAndReplace({_id: req.params.id}, req.body);
        res.json({
            modified: modifiedUser,
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
    getUserByEmail,
    putUser,
    patchUser,
    deleteUser,
};