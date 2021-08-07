const Discord = require('discord.js')
const rolestatsSchema = require('../../schemas/rolestats-schema')

module.exports = {
    commands: ['listcounters', 'listcounter', 'counters-list', 'list-counters'],
    minArgs: 0,
    maxArgs: 0,
    permissions: 'MANAGE_CHANNELS',
    permissionError: 'You don\'t have the required permissions.',
    callback: async (message, arguments, text) => {

        const guildId = message.guild.id

        const results = await rolestatsSchema.find({
            guildId,
        })

        let reply = ''

        if (!results) {
            const embed1 = new Discord.MessageEmbed()
            .setDescription(`${reply}This server has no counters.`)
            .setColor('#8b0000')
            .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
    
            message.channel.send(embed1)
            return
        }

        for (const result of results) {
            const { countername, channelId, roleId, number } = result

            reply += `ID Number: \`${number}\`\nCounter Name: \`${countername}\`\nChannel: <#${channelId}>\nRole: ${roleId}\n\n`
        }

        const embed = new Discord.MessageEmbed()
        .setDescription(reply)
        .setColor('#8b0000')
        .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")

        message.channel.send(embed)
    }
}