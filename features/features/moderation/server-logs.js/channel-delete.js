const { MessageEmbed } = require('discord.js')
const modlogSchema = require('../../../../schemas/mod-logs-schema')

// { guildId: channelId }
const cache = {}

module.exports = client => {
    client.on('channelDelete', async (channel) => {
        const { guild } = channel



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
        .setTitle('__Deleted Channel__')
        .setColor('RANDOM')
        .setTimestamp()
        .addFields(
        {
            name: 'Channel',
            value: channel.name,
            inline: false
        })

    const targetChannel = guild.channels.cache.get(channelId)
    if (targetChannel) {
        targetChannel.send(embed);
    }
    })
}