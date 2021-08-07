const Discord = require("discord.js")

const cBase = require('../command-base')


module.exports = {
    commands: ['aki', 'akinator'],
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: 'aki',
    callback: async (message, arguments, text) => {

        client = message.client

        const akinator = require("discord.js-akinator");
        akinator(message, client, "en");
    }}