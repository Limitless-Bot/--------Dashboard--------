const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const rolestatsSchema = mongoose.Schema({
    number: Number,
    guildId: reqString,
    channelId: reqString,
    roleId: reqString,
    countername: reqString
})

module.exports = mongoose.model('rolestats', rolestatsSchema)