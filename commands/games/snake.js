const Discord = require("discord.js")
const client = new Discord.Client()
const cBase = require('../command-base')


module.exports = {
    commands: 'snake-game',
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: 'snake-game',
    callback: (message, arguments, text) => {

        const djsGames = require('djs-games')
        const SnakeGame = new djsGames.SnakeGame()
        SnakeGame.startGame(message)


}}
