const express = require('express');

const routesClass = require('./routes/routesClass');
const routesRace = require('./routes/routesRace');
const routesUser = require('./routes/routesUser');

const router = express.Router();

router.use('/', routesUser);
router.use('/api/class', routesClass);
router.use('/api/race', routesRace);

module.exports = router;