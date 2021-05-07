const express = require('express');

const routesClass = require('./routes/routesClass');
const routesRace = require('./routes/routesRace');

const router = express.Router();

router.use('/api/class', routesClass);
router.use('/api/race', routesRace);

module.exports = router;

// router.use('/', routesUser);
// router.route('/')
//     .get((req, res) => {
//         res.json({
//             Mensaje: "welcome"
//         });
//     });