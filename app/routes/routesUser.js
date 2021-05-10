const express = require('express');

const userController = require('../controllers/userController');

const routesUser = express.Router();

routesUser.route('/')
    .post(userController.postUser)
    .get(userController.getUsers);

routesUser.route('/id/:id')
    .get(userController.getUser)
    .put(userController.putUser)
    .patch(userController.patchUser)
    .delete(userController.deleteUser);

module.exports = routesUser;