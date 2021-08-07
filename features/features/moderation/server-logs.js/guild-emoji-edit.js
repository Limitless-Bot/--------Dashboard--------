const { MessageEmbed } = require('discord.js')
const modlogSchema = require('../../../../schemas/mod-logs-schema')

// { guildId: channelId }
const cache = {}

module.exports = client => {
    client.on('emojiUpdate', async (oldEmoji, newEmoji) => {
        const { animated, name, guild } = oldEmoji



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
        .setTitle('__Emoji Edited__')
        .setColor('RANDOM')
        .setTimestamp()
        .addFields(
        {
            name: 'Name',
            value: name,
            inline: false
        },
        {
            name: 'Animated',
            value: animated,
            inline: false
        })

    const targetChannel = guild.channels.cache.get(channelId)
    if (targetChannel) {
        targetChannel.send(embed);
    }
    })
}