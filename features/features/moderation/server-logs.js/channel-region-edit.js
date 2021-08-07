const { MessageEmbed } = require('discord.js')
const modlogSchema = require('../../../../schemas/mod-logs-schema')

// { guildId: channelId }
const cache = {}

module.exports = client => {
    client.on('channelUpdate', async (oldChannel, newChannel) => {
        const { guild, region: regionO } = oldChannel
        const { region: regionN } = newChannel


        let channelId = cache[guild.id]
        if (!channelId) {
            const result = await modlogSchema.findById(guild.id)
            if (!result) {
                return
            }

            channelId = result.channelId
            cache[guild.id] = channelId
        }

        if (regionO != regionN) {
        const embed = new MessageEmbed()
        .setTitle('__Channel Edit__')
        .setColor('RANDOM')
        .setTimestamp()
        .addFields(
        {
            name: 'Old Region',
            value: regionO,
            inline: false
        },
        {
            name: 'New Region',
            value: regionN,
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