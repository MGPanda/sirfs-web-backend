const mongoose = require('mongoose');

const classSchema = mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    equippables: {
        type: Array,
    },
    extra: {
        name: {
            type: String,
        },
        description: {
            type: String,
        }
    },
    skills: [
        [
            {
                name: {
                    type: String,
                },
                subtitle: {
                    type: String,
                },
                description: {
                    type: String,
                }
            }
        ]
    ]
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;