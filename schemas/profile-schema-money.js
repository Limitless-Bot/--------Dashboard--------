const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const profileSchema = mongoose.Schema({
  guildId: reqString,
  userId: reqString,
  coinsCash: {
    type: Number,
    required: true,
  },
  coinsBank: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('profiles-money', profileSchema, 'profiles-money')
