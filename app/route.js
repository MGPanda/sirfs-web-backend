const express = require('express');

const routesClass = require('./routes/routesClass');

const router = express.Router();

router.use('/api/class', routesClass);

module.exports = router;

// router.use('/', routesUser);
// router.route('/')
//     .get((req, res) => {
//         res.json({
//             Mensaje: "welcome"
//         });
//     });