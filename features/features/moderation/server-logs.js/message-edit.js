const { MessageEmbed } = require('discord.js')
const modlogSchema = require('../../../../schemas/mod-logs-schema')

// { guildId: channelId }
const cache = {}

module.exports = client => {
    client.on('messageUpdate', async (oldMessage, newMessage) => {
        const { content, channel, author, guild, mentions } = oldMessage

        if (!author || author.bot || mentions.users.size > 0 || content === newMessage.content) {
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
        .setTitle('__Message Edited__')
        .setColor('RANDOM')
        .setTimestamp()
        .addFields({
            name: 'Old Message',
            value: content,
            inline: false
        },
        {
            name: 'New Message',
            value: newMessage.content,
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