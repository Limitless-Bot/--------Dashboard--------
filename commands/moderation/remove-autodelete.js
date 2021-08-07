const Discord = require('discord.js')
const autodeleteSchema = require('../../schemas/autodelete')

module.exports = {
    commands: ['remove-autodelete', 'removeautodelete', 'remove-autodelete', 'autodelete-remove'],
    minArgs: 1,
    maxArgs: 1,
    permissions: 'MANAGE_MESSAGES',
    expectedArgs: 'remove-autodelete <ID Number>',
    permissionError: 'You don\'t have the required permissions.',
    callback: async (message, arguments, text) => {

        const guildId = message.guild.id
        const id = arguments[0]

        if (isNaN(id)) {
            message.channel.send('Please say a number!')
            return
        }

        const results = await autodeleteSchema.findOneAndDelete({
            guildId,
            id,
        },
        {
            guildId,
            id,
        })

        message.channel.send(`I have removed the autodelete. ID: ${id}`)

        
    }
}