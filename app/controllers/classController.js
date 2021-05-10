const Class = require('../models/Class');

const handleError = (e, res) => {
    console.error(e.message);
    res.json({
        error: e.message,
    });
}

async function postClass(req, res) {
    try {
        const newClass = new Class(req.body);
        await newClass.save();
        res.json({
            added: newClass,
        });
    } catch (e) {
        handleError(e, res);
    }
}

async function getClasses(req, res) {
    try {
        const classes = await Class.find();
        res.json({
            classes: classes,
        });
    } catch (e) {
        handleError(e, res);
    }
}

async function getClassesByEdition(req, res) {
    try {
        const classes = await Class.find({edition: req.params.edition});
        res.json({
            classes: classes,
        });
    } catch (e) {
        handleError(e, res);
    }
}

async function getClass(req, res) {
    try {
        const thisClass = await Class.findById(req.params.id);
        res.json({
            class: thisClass,
        });
    } catch (e) {
        handleError(e, res);
    }
}

async function getClassByEditionAndName(req, res) {
    try {
        const thisClass = await Class.find({edition: req.params.edition, name: req.params.name});
        res.json({
            class: thisClass,
        });
    } catch (e) {
        handleError(e, res);
    }
}

async function putClass(req, res) {
    try {
        const modifiedClass = await Class.findOneAndReplace({_id: req.params.id}, req.body);
        res.json({
            modified: modifiedClass,
        });
    } catch (e) {
        handleError(e, res);
    }
}

async function patchClass(req, res) {
    try {
        const modifiedClass = await Class.findOneAndUpdate({_id: req.params.id}, req.body);
        res.json({
            modified: modifiedClass,
        });
    } catch (e) {
        handleError(e, res);
    }
}

async function deleteClass(req, res) {
    try {
        const deletedClass = await Class.findOneAndDelete({_id: req.params.id});
        res.json({
            deleted: deletedClass,
        });
    } catch (e) {
        handleError(e, res);
    }
}

module.exports = {
    postClass,
    getClasses,
    getClassesByEdition,
    getClass,
    getClassByEditionAndName,
    putClass,
    patchClass,
    deleteClass,
};