const bodyParser = require('body-parser');

const router = require('../route')

function expressLoader(app) {
    app.use(bodyParser.json());

    app.use(router);

    app.use(function (req, res) {
        res.status(404).json({
            error: 'Not found.',
        })
    })
}

module.exports = expressLoader;