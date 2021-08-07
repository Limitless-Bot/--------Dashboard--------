const { MessageEmbed, Util } = require('discord.js');
const autoreactSchema = require('../../schemas/autoreact')

module.exports = {
    commands: ['autoreact'],
    permissionError: "You thought you could be a sneaky boi, guess you are not important enough for this command",
    expectedArgs: 'autoreact <emoji> <sentence/word it reacts to>',
    minArgs: 2,
    maxArgs: null,
    permissions: 'MANAGE_MESSAGES',
    callback: async (message, arguments, text) => {

        const guildId = message.guild.id
        const emoji = arguments[0]

        arguments.shift()
        let targetWords = arguments.join(' ').toUpperCase()

        const result = await autoreactSchema.find({
            guildId,
        })

        let lastId = result[result.length - 1]
        if (!lastId) {
            lastId = {
                id: 0
            }
        }
        

        await new autoreactSchema(
            {
                id: parseFloat(lastId.id) + 1,
                guildId,
                emoji,
                targetWords,
            }).save()
      
        message.channel.send('Set autoreact')

    }};
