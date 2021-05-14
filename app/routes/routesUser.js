const express = require('express');
const passport = require("passport");

const userController = require('../controllers/userController');
const authController = require("../controllers/authController");

const routesUser = express.Router();

routesUser.route('/user/:id')
    .get(userController.getUser)
    .put(userController.putUser)
    .patch(userController.patchUser)
    .delete(userController.deleteUser);

routesUser.route('/register')
    .post(userController.postUser);

routesUser.route('/login')
    .post(passport.authenticate('login-local', {
        session: false
    }), authController.getToken);


module.exports = routesUser;