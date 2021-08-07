const { MessageEmbed } = require('discord.js')
const suggestionsSchema = require('../../../schemas/suggestions-schema')

const statusMessages = {
    WAITING: {
        text: '🗳️ Waiting on the community to vote on this suggestion! 🗳️',
        color: '#ffcb00',
        image: 'https://c.tenor.com/kjVkxy08GyMAAAAj/vote-votes.gif'
    },
    ACCEPTED: {
        text: '✅ Suggestion **__Accepted__**! This will be done soon! ✅',
        color: 0x34eb5b,
        image: 'https://media.tenor.com/images/7006723130099f69bfcad6178634b655/tenor.gif'
    },
    PENDING: {
        text: '⌛ Suggestion **__Pending__**! This will be thought about! ⌛',
        color: '#80c3eb',
        image: 'https://media.tenor.com/images/258742e9457b84ae8dc402122c5732a5/tenor.gif'
    },
    DENIED: {
        text: '❌ Thank you for the suggestion, but it isn\'t being implemented. ❌',
        color: 0xc20808,
        image: 'https://media.tenor.com/images/1aabed15b5bcce5672f55f884ab41aad/tenor.gif'
    }
}

let suggestionCache = {}
const fetchSuggestionChannels = async (guildId) => {
    let query = {}
    if (guildId) {
        query._id - guildId
    }
    const results = await suggestionsSchema.find(query)
    for (const result of results) {
        const {
            _id,
            channelId
        } = result
        suggestionCache[_id] = channelId
    }
}
module.exports = client => {
    fetchSuggestionChannels()
    client.on('message', message => {
        const {
            guild,
            channel,
            content,
            member
        } = message

        const attachments = (message.attachments).array();
        const attachment = attachments[0]
 

        if (message.channel.type === 'dm') {
            return
        }
        const cachedChannelId = suggestionCache[guild.id]

        if (message.content.startsWith('=>')) {
          return
        }


        if (cachedChannelId && cachedChannelId === channel.id && !member.user.bot) {
            const status = statusMessages.WAITING
            const embed = new MessageEmbed()
                .setColor(status.color)
                .setAuthor(member.displayName, member.user.displayAvatarURL())
                .setDescription(`**Suggestion:**\n${content}`)
                .setThumbnail(status.image)
                .addFields({
                    name: '**Status:**',
                    value: status.text
                })
                .setFooter('Want to suggest something? Simply type it in this channel (Can include images)')
            if (attachments.length !== 0) {
                embed.setImage(attachment.proxyURL)
            }
            message.delete()
            channel.send(embed)
                .then(message => {
                    message.react('✅')
                        .then(() => {
                            message.react('❌')
                        })

                })
        }
    })
}
module.exports.fetchSuggestionChannels = fetchSuggestionChannels
module.exports.statusMessages = statusMessages
module.exports.suggestionCache = () => {
    return suggestionCache
}