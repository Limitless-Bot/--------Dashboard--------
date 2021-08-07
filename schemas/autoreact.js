const mongoose = require('mongoose');


let Schema = new mongoose.Schema({
    id: String,
    guildId: String,
    targetWords: String,
    emoji: String,
})

module.exports = mongoose.model('autoreact', Schema, 'autoreact')