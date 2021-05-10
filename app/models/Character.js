const mongoose = require('mongoose');
const Race = require("./Race");
const Class = require("./Class");

const characterSchema = mongoose.Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
    },
    edition: {
        type: String,
    },
    level: {
        type: Number,
    },
    race: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: Race,
    },
    class: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: Class,
    },
    stats: {
        fue: {
            type: Number,
        },
        bonusFue: {
            type: Number,
        },
        des: {
            type: Number,
        },
        bonusDes: {
            type: Number,
        },
        pun: {
            type: Number,
        },
        bonusPun: {
            type: Number,
        },
        int: {
            type: Number,
        },
        bonusInt: {
            type: Number,
        },
        sab: {
            type: Number,
        },
        bonusSab: {
            type: Number,
        },
        agi: {
            type: Number,
        },
        bonusAgi: {
            type: Number,
        },
        enc: {
            type: Number,
        },
        bonusEnc: {
            type: Number,
        },
        vol: {
            type: Number,
        },
        bonusVol: {
            type: Number,
        },
        pv: {
            type: Number,
        },
        maxPV: {
            type: Number,
        },
        pe: {
            type: Number,
        },
        maxPE: {
            type: Number,
        },
        critBonus: {
            type: Number,
        },
        bonusCritBonus: {
            type: Number,
        },
        critMult: {
            type: Number,
        },
        bonusCritMult: {
            type: Number,
        },
        spellBonus: {
            type: Number,
        },
        bonusSpellBonus: {
            type: Number,
        },
        spellReduction: {
            type: Number,
        },
        bonusSpellReduction: {
            type: Number,
        },
    },
    armor: {
        type: Number,
    },
    equipment: {
        armor: {
            head: {

            }
        }
    }
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;