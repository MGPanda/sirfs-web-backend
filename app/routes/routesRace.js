const express = require('express');

const raceController = require('../controllers/raceController');

const routesRace = express.Router();

routesRace.route('/')
    .post(raceController.postRace)
    .get(raceController.getRaces);

routesRace.route('/id/:id')
    .get(raceController.getRace)
    .patch(raceController.patchRace)
    .delete(raceController.deleteRace);

routesRace.route('/:edition')
    .get(raceController.getRacesByEdition);

routesRace.route('/:edition/:name')
    .get(raceController.getRaceByEditionAndName);

module.exports = routesRace;