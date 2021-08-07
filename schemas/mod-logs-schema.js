const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const modLogsSchema = mongoose.Schema({
    _id: reqString, // guildId
    channelId: reqString
})

module.exports = mongoose.model('mod-logs', modLogsSchema)