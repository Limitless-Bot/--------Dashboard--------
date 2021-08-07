const chatbotSchema = require('../../schemas/chatbot-schema')

module.exports = {
    commands: ['set-chatbot'],
    permissions: 'ADMINISTRATOR',
    expectedArgs: 'set-chatbot',
    minArgs: 0,
    callback: async (message, arguments, text) => {
        const channel = message.mentions.channels.first() || message.channel

        const {
            guild: { id: guildId }
        } = message
        const { id: channelId } = channel

        await chatbotSchema.findOneAndUpdate(
        {
            guildId,
        },
        {
            guildId,
            channelId
        },
        {
            upsert: true
        })

        message.channel.send(`The chatbot channel has been set to ${channel}`)
        channel.send('Type anything in here and we can have a converstaion, it takes me around 5 seconds to respond!')
        .then(message => {
        message.pin()
        })
        channel.setTopic(':exclamation: **CLICK TO EXPAND** :exclamation:\n\nType anything in here and you can have a converstaion with Limitless, it takes the bot around 5 seconds to respond!')

        
        
    }}