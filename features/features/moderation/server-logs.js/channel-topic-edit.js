const { MessageEmbed } = require('discord.js')
const modlogSchema = require('../../../../schemas/mod-logs-schema')

// { guildId: channelId }
const cache = {}

module.exports = client => {
    client.on('channelUpdate', async (oldChannel, newChannel) => {
        const { guild, topic: topicO } = oldChannel
        const { topic: topicN } = newChannel


        let channelId = cache[guild.id]
        if (!channelId) {
            const result = await modlogSchema.findById(guild.id)
            if (!result) {
                return
            }

            channelId = result.channelId
            cache[guild.id] = channelId
        }

        if (topicO != topicN) {
        const embed = new MessageEmbed()
        .setTitle('__Channel Edit__')
        .setColor('RANDOM')
        .setTimestamp()
        .addFields(
        {
            name: 'Old Channel Topic',
            value: topicO,
            inline: false
        },
        {
            name: 'New Channel Topic',
            value: topicN,
            inline: false
        },
        {
            name: 'Channel',
            value: oldChannel,
            inline: false
        })
    


    const targetChannel = guild.channels.cache.get(channelId)
    if (targetChannel) {
        targetChannel.send(embed);
    }
    }
    })
}