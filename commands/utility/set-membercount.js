const membercountSchema = require('../../schemas/membercount-schema')

module.exports = {
    commands: ['set-membercount'],
    permissions: 'MANAGE_CHANNELS',
    minArgs: 1,
    expectedArgs: 'set-membercount <Channel ID or #channel>',
    permissionError: 'You don\'t have the required permissions.',
    callback: async (message, arguments, text, client) => {

        const { guild } = message
        let channelId = ''

        const mentions = message.mentions.channels.first()

        if (mentions) {
            channelId = mentions.id
        }
        if (!mentions) {
            channelId = arguments[0]
        }

        const {
            guild: { id: guildId }
        } = message

        await membercountSchema.findOneAndUpdate(
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

        const channelname = client.channels.cache.get(channelId)
        try {
      channelname.setName(`Total Members: ${guild.memberCount}`)
    } catch (err) {
    }

        message.reply(`The membercount channel has been set, everytime someone joins/leaves the server I will update it!`)

        
    }}