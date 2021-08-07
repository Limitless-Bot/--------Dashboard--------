const { MessageEmbed } = require('discord.js')
const modlogSchema = require('../../../../schemas/mod-logs-schema')

// { guildId: channelId }
const cache = {}

module.exports = client => {
    client.on('messageDelete', async (message) => {
        const { content, channel, author, guild, mentions } = message

        if (mentions.users.size > 0) {
            return
        }

        let channelId = cache[guild.id]
        if (!channelId) {
            const result = await modlogSchema.findById(guild.id)
            if (!result) {
                return
            }
            
            channelId = result.channelId
            cache[guild.id] = channelId
        }

        const targetChannel = guild.channels.cache.get(channelId)

        if (author.bot) {
        const embed = new MessageEmbed()
        .setTitle('__Message Deleted__')
        .setColor('RANDOM')
        .setTimestamp()
        .setDescription(`Message\n${content}\n\nChannel\n${channel}\n\nMessage Author\n${author}`)
        if (targetChannel) {
            targetChannel.send(embed);
        }
        return
        }

        const embed = new MessageEmbed()
        .setTitle('__Message Deleted__')
        .setColor('RANDOM')
        .setTimestamp()
        .addFields({
            name: 'Message',
            value: content,
            inline: false
        },
        {
            name: 'Channel',
            value: channel,
            inline: false
        },
        {
            name: 'Message Author',
            value: author,
            inline: false
        })

    if (targetChannel) {
        targetChannel.send(embed);
    }
    })
}