const mongoose = require('mongoose');

const raceSchema = mongoose.Schema({
    name: {
        type: String,
    },
    edition: {
        type: String,
    },
    description: {
        type: String,
    },
    baseFue: {
        type: Number,
    },
    baseDes: {
        type: Number,
    },
    basePun: {
        type: Number,
    },
    baseInt: {
        type: Number,
    },
    baseSab: {
        type: Number,
    },
    baseAgi: {
        type: Number,
    },
    baseVol: {
        type: Number,
    },
    basePV: {
        type: Number,
    },
    basePE: {
        type: Number,
    },
    baseEnc: {
        type: Number,
    },
    skills: [
        {
            name: {
                type: String,
            },
            description: {
                type: String,
            }
        }
    ],
    draconianSkills: [
        {
            positive: [
                {
                    name: {
                        type: String,
                    },
                    description: {
                        type: String,
                    }
                }
            ],
            negative: [
                {
                    name: {
                        type: String,
                    },
                    description: {
                        type: String,
                    }
                }
            ]
        }
    ]
});

const Race = mongoose.model('Race', raceSchema);

module.exports = Race;