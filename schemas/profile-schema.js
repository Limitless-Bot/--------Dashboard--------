const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const profileSchema = mongoose.Schema({
  guildId: reqString,
  userId: {
    type: String,
  },
  coins: {
    type: Number,
    default: 0
  },
  lastGave: Date
})

module.exports = mongoose.model('profiles', profileSchema)
