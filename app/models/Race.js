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
    baseStats: [
        {
            fue: {
                type: Number,
            },
            des: {
                type: Number,
            },
            pun: {
                type: Number,
            },
            int: {
                type: Number,
            },
            sab: {
                type: Number,
            },
            agi: {
                type: Number,
            },
            vol: {
                type: Number,
            },
            pv: {
                type: Number,
            },
            pe: {
                type: Number,
            },
            enc: {
                type: Number,
            },
        }
    ],
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