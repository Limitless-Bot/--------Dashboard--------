const welcomeSchema = require('../../schemas/welcome')

module.exports = {
    commands: ['delete-welcome'],
    permissions: 'MANAGE_GUILD',
    minArgs: 0,
    permissionError: 'You don\'t have the required permissions.',
    callback: async (message, arguments, text) => {

        const guildId = message.guild.id
        

        await welcomeSchema.findOneAndDelete({
            guildId,
        },
        {
            guildId,
        })

        message.channel.send(`Deleted welcome message.`)

        
    }}