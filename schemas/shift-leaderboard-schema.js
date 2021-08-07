const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const shiftsLeaderboardSchema = mongoose.Schema({
    _id: reqString,
    channelId: reqString
})

module.exports = mongoose.model('shifts-leaderboards', shiftsLeaderboardSchema)
