const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const warnSchema = mongoose.Schema({
    id: reqString,
    guildId: reqString,
    userId: reqString,
    reason: reqString,
    timestamp: reqString,
    staffId: reqString,
    staffTag: reqString
})

module.exports = mongoose.model('warnings', warnSchema)