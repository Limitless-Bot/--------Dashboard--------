const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const shiftMaxSchema = mongoose.Schema({
    guildId: reqString,
    max: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('shifts-max-clock-ins', shiftMaxSchema)
