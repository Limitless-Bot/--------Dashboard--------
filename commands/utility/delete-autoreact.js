const Discord = require('discord.js')
const autoreactSchema = require('../../schemas/autoreact')

module.exports = {
    commands: ['delete-autoreact', 'deleteautoreact', 'delete-autoreact', 'autoreact-delete'],
    expectedArgs: 'delete-autoreact <ID Number>',
    minArgs: 1,
    maxArgs: 1,
    permissions: 'MANAGE_MESSAGES',
    permissionError: 'You don\'t have the required permissions.',
    callback: async (message, arguments, text) => {

        const guildId = message.guild.id
        const id = arguments[0]

        if (isNaN(id)) {
            message.channel.send('Please say a number!')
            return
        }

        const results = await autoreactSchema.findOneAndDelete({
            guildId,
            id,
        },
        {
            guildId,
            id,
        })

        message.channel.send(`I have deleted the autoreact. ID: ${id}`)

        
    }
}