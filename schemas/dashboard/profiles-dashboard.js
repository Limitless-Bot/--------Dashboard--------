const mongoose = require('mongoose');


let Schema = new mongoose.Schema({
    username: String,
    password: String,
})

module.exports = mongoose.model('profiles dashboard', Schema, 'profiles dashboard')