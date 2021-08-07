const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const clockInSchema = mongoose.Schema({
    userId: reqString,
    guildId: reqString,
    expires: {
        type: Date,
        required: true
    },
    current: {
        type: Boolean,
        required: true
    },
    channelId: reqString,
    duration: reqString
}, {
    timestamps: true,
})

module.exports = mongoose.model('clock-in', clockInSchema)