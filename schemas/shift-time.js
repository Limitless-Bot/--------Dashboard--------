const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const shiftTimeSchema = mongoose.Schema({
    guildId: reqString,
    time: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('shifts-length/time', shiftTimeSchema)
