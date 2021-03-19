const mongooseLoader = require('./loaders/mongooseLoader');
const expressLoader = require('./loaders/expressLoader');

async function loader(app) {
    try {
        await mongooseLoader();
        console.info('Mongoose is now active.');
        await expressLoader(app);
        console.info('Express is now active.');
    } catch (e) {
        console.error(e.message);
        throw e;
    }
}

module.exports = loader;