const { MessageEmbed } = require('discord.js')
const modlogSchema = require('../../../../schemas/mod-logs-schema')

// { guildId: channelId }
const cache = {}

module.exports = client => {
    client.on('channelUpdate', async (oldChannel, newChannel) => {
        const { guild, nsfw: nsfwO } = oldChannel
        const { nsfw: nsfwN } = newChannel


        let channelId = cache[guild.id]
        if (!channelId) {
            const result = await modlogSchema.findById(guild.id)
            if (!result) {
                return
            }

            channelId = result.channelId
            cache[guild.id] = channelId
        }

        if (nsfwO != nsfwN) {
        const embed = new MessageEmbed()
        .setTitle('__Channel Edit__')
        .setColor('RANDOM')
        .setTimestamp()
        .addFields(
        {
            name: 'NSFW was set to',
            value: nsfwO,
            inline: false
        },
        {
            name: 'NSFW is now set to',
            value: nsfwN,
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