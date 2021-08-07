const Discord = require("discord.js")
const client = new Discord.Client()
const cBase = require('../command-base')

const TicTacToe = require('discord-tictactoe');
const game = new TicTacToe({ language: 'en' })

module.exports = {
    commands: ['ttt-ai', 'tic-tac-toe-ai', 'xo-ai', 'ox-ai'],
    expectedArgs: 'ttt-ai',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {

        game.handleMessage(message);

    }}