const express = require('express');

const classController = require('../controllers/classController');

const routesClass = express.Router();

routesClass.route('/')
    .post(classController.postClass)
    .get(classController.getClasses);

routesClass.route('/id/:id')
    .get(classController.getClass)
    .patch(classController.patchClass)
    .delete(classController.deleteClass);

routesClass.route('/:edition')
    .get(classController.getClassesByEdition);

routesClass.route('/:edition/:name')
    .get(classController.getClassByEditionAndName);

module.exports = routesClass;