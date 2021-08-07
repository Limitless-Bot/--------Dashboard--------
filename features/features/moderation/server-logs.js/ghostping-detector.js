const { MessageEmbed } = require('discord.js')
const modlogSchema = require('../../../../schemas/mod-logs-schema')

// { guildId: channelId }
const cache = {}

module.exports = client => {
    client.on('messageDelete', async (message) => {
        const { content, channel, author, guild, mentions } = message

        if (!author || author.bot || mentions.users.size === 0) {
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

        const embed = new MessageEmbed()
        .setTitle('__Possible ghost ping detected__')
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

    const targetChannel = guild.channels.cache.get(channelId)
    if (targetChannel) {
        targetChannel.send(embed);
    }
    })
}