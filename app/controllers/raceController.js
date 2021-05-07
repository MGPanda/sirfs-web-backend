const Race = require('../models/Race');

const handleError = (e, res) => {
    console.error(e.message);
    res.json({
        error: e.message,
    });
}

async function postRace(req, res) {
    try {
        const newRace = new Race(req.body);
        await newRace.save();
        res.json({
            added: newRace,
        });
    } catch (e) {
        handleError(e, res);
    }
}

async function getRaces(req, res) {
    try {
        const races = await Race.find();
        res.json({
            races: races,
        });
    } catch (e) {
        handleError(e, res);
    }
}

async function getRacesByEdition(req, res) {
    try {
        const races = await Race.find({edition: req.params.edition});
        res.json({
            races: races,
        });
    } catch (e) {
        handleError(e, res);
    }
}

async function getRace(req, res) {
    try {
        const thisRace = await Race.findById(req.params.id);
        res.json({
            race: thisRace,
        });
    } catch (e) {
        handleError(e, res);
    }
}

async function getRaceByEditionAndName(req, res) {
    try {
        const thisRace = await Race.find({edition: req.params.edition, name: req.params.name});
        res.json({
            race: thisRace,
        });
    } catch (e) {
        handleError(e, res);
    }
}

async function patchRace(req, res) {
    try {
        const modifiedRace = await Race.findOneAndUpdate({_id: req.params.id}, req.body);
        res.json({
            modified: modifiedRace,
        });
    } catch (e) {
        handleError(e, res);
    }
}

async function deleteRace(req, res) {
    try {
        const deletedRace = await Race.findOneAndDelete({_id: req.params.id});
        res.json({
            deleted: deletedRace,
        });
    } catch (e) {
        handleError(e, res);
    }
}

module.exports = {
    postRace,
    getRaces,
    getRacesByEdition,
    getRace,
    getRaceByEditionAndName,
    patchRace,
    deleteRace,
};