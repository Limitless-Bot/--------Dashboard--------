const Discord = require("discord.js")
const client = new Discord.Client()
const cBase = require('../command-base')


module.exports = {
    commands: ['hangman'],
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: 'hangman',
    callback: (message, arguments, text) => {

        const djsGames = require('djs-games')
const HangMan = new djsGames.HangMan()
HangMan.startGame(message)

    }}