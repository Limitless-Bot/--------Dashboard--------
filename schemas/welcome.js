const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

let Schema = new mongoose.Schema({
    guildId: reqString,
    welcomemessage: reqString,
    channelId: reqString,
})

module.exports = mongoose.model('welcome', Schema, 'welcome')