const suggestionSchema = require('../../schemas/suggestions-schema')
const { fetchSuggestionChannels } = require('../../features/features/suggestions/suggestions')

module.exports = {
    commands: ['set-suggestions'],
    permissions: 'ADMINISTRATOR',
    minArgs: 0,
    expectedArgs: 'set-suggestions',
    permissionError: 'You don\'t have the required permissions.',
    callback: async (message, arguments, text) => {
        const channel = message.mentions.channels.first() || message.channel

        const {
            guild: { id: guildId }
        } = message
        const { id: channelId } = channel

        await suggestionSchema.findOneAndUpdate(
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

        message.channel.send(`The suggestions channel has been set to ${channel}`)

        channel.send('Have a suggestion? Simply type it in this channel, No need to run any command to submit an idea.\nCan include images, a staff member can then accept/deny suggestions.\n\nIf you don\'t want me to turn what you say into a suggestion, start the message with **=>**')
        .then(message => {
        message.pin()
        })
        channel.setTopic(':exclamation: **CLICK TO EXPAND** :exclamation:\n\nHave a suggestion? Simply type it in this channel, No need to run any command to submit an idea. Can include images, a staff member can then accept/deny suggestions. If you don\'t want me to turn what you say into a suggestion, start the message with **=>**')
        fetchSuggestionChannels(guildId)
    }}