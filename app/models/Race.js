const mongoose = require('mongoose');

const raceSchema = mongoose.Schema({
    name: {
        type: String,
    },
    // description: {
    //     type: String,
    // },
    // equippables: {
    //     type: Array,
    // },
    // extra: {
    //     name: {
    //         type: String,
    //     },
    //     description: {
    //         type: String,
    //     }
    // },
    // skills: [
    //     [
    //         {
    //             name: {
    //                 type: String,
    //             },
    //             subtitle: {
    //                 type: String,
    //             },
    //             description: {
    //                 type: String,
    //             }
    //         }
    //     ]
    // ]
});

const Race = mongoose.model('Race', raceSchema);

module.exports = Race;