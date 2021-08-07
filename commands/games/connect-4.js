const Discord = require("discord.js")
const client = new Discord.Client()
const cBase = require('../command-base')


module.exports = {
    commands: ['connect4', 'c4'],
    minArgs: 1,
    maxArgs: 1,
    expectedArgs: 'connect4 <@user>',
    callback: (message, arguments, text) => {
        
        const djsGames = require('djs-games')
const ConnectFour = new djsGames.ConnectFour()
ConnectFour.startGame(message)

    }}