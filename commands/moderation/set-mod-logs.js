const modLogsSchema = require('../../schemas/mod-logs-schema')

module.exports = {
    commands: ['set-mod-logs'],
    permissions: 'ADMINISTRATOR',
    minArgs: 0,
    expectedArgs: 'set-mod-logs',
    permissionError: 'You don\'t have the required permissions.',
    callback: async (message, arguments, text) => {
        const channel = message.mentions.channels.first() || message.channel

        const {
            guild: { id: guildId }
        } = message
        const { id: channelId } = channel

        await modLogsSchema.findOneAndUpdate(
        {
            _id: guildId
        },
        {
            _id: guildId,
            channelId
        },
        {
            upsert: true
        })

        message.channel.send(`The mod-logs channel has been set to ${channel}`)

        
    }}