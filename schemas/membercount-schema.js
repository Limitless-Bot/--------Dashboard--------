const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const membercountSchema = mongoose.Schema({
    _id: reqString, // guildId
    channelId: reqString
})

module.exports = mongoose.model('membercount', membercountSchema)