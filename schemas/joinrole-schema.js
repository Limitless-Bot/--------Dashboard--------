const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const joinroleSchema = mongoose.Schema({
    _id: reqString, // guildId
    roleId: Array,
})

module.exports = mongoose.model('joinrole', joinroleSchema)