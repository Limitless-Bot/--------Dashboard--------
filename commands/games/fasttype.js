const Discord = require("discord.js")
const client = new Discord.Client()
const cBase = require('../command-base')


module.exports = {
    commands: ['fasttype', 'ft'],
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: 'fasttype',
    callback: (message, arguments, text) => {

        const djsGames = require('djs-games')
        const FastTyper = new djsGames.FastTyper()
        FastTyper.startGame(message)

    }}