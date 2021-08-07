const Discord = require("discord.js")
const client = new Discord.Client()
const cBase = require('../command-base')


module.exports = {
    commands: ['gtn', 'guess-the-number'],
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: 'gtn',
    callback: (message, arguments, text) => {

     
        
        const djsGames = require('djs-games')
const guessTheNumber = new djsGames.GuessTheNumber()
 guessTheNumber.startGame(message)

    }}