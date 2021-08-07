const Discord = require('discord.js')
const rolestatsSchema = require('../../schemas/rolestats-schema')

module.exports = {
    commands: ['delete-counter', 'deletecounter', 'delete-counters', 'counter-delete'],
    expectedArgs: 'delete-autoreact <ID Number>',
    minArgs: 1,
    maxArgs: 1,
    permissions: 'MANAGE_CHANNELS',
    permissionError: 'You don\'t have the required permissions.',
    callback: async (message, arguments, text) => {

        const guildId = message.guild.id
        const number = arguments[0]

        if (isNaN(number)) {
            message.channel.send('Please say a number!')
            return
        }

        const results = await rolestatsSchema.findOneAndDelete({
            guildId,
            number,
        },
        {
            guildId,
            number,
        })

        message.channel.send(`I have deleted the counter. ID Number: ${number}`)

        
    }
}