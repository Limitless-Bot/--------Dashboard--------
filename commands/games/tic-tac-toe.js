const Discord = require("discord.js")
const client = new Discord.Client()
const cBase = require('../command-base')

const TicTacToe = require('discord-tictactoe');
const game = new TicTacToe({ language: 'en' })

module.exports = {
    commands: ['ttt', 'tic-tac-toe', 'xo', 'ox'],
    expectedArgs: 'ttt @user',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text) => {

        const djsGames = require('djs-games')
        const TicTacToe = new djsGames.TicTacToe()
         TicTacToe.startGame(message)

    }}