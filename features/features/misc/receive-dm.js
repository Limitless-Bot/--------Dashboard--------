const { MessageEmbed } = require('discord.js')


// { guildId: channelId }
const cache = {}

module.exports = client => {
    client.on('message', async (message) => {
        const { member, content, channel } = message
       
        if (message.channel.type === 'dm') {

            if (message.author.bot) {
                return
            }

            const embed2 = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Message Received')
            .setDescription(`Hello, my name is Limitless. Please mention ${client.user} in your server to see my prefix.`)
            .setFooter('Any dm you send me automatically gets forawrded to the developers!')
            .setTimestamp()

            message.reply(embed2)


            const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('New DM Received')
            .setDescription(`**Content:** ${content}\n\n**Sent By:** ${message.author.tag}\n\n**User ID:** ${message.author.id}`)
            .setTimestamp()

            const channel2 = client.channels.cache.get('867857763915923486')

            channel2.send(embed)
        }
    })
}


       