const mongoose = require('mongoose');


let Schema = new mongoose.Schema({
    id: String,
    guildId: String,
    targetWords: String,
})

module.exports = mongoose.model('autodelete', Schema, 'autodelete')