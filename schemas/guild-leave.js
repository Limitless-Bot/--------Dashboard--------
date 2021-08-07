const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

let Schema = new mongoose.Schema({
    guildId: reqString,
    leavemessage: reqString,
    channelId: reqString,
})

module.exports = mongoose.model('guild-leave', Schema, 'guild-leave')