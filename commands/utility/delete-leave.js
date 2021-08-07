const leaveSchema = require('../../schemas/guild-leave')

module.exports = {
    commands: ['delete-leave', 'delete-goodbye'],
    permissions: 'MANAGE_GUILD',
    minArgs: 0,
    permissionError: 'You don\'t have the required permissions.',
    callback: async (message, arguments, text) => {

        const guildId = message.guild.id
        

        await leaveSchema.findOneAndDelete({
            guildId,
        },
        {
            guildId,
        })

        message.channel.send(`Deleted goodbye message.`)

        
    }}