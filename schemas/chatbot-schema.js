const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const chatbotSchema = mongoose.Schema({
    guildId: reqString,
    channelId: reqString
})

module.exports = mongoose.model('chatbot', chatbotSchema)