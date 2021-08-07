const Discord = require('discord.js')
const autoreactSchema = require('../../schemas/autoreact')

module.exports = {
    commands: ['listautoreacts', 'listautoreact', 'autoreact-list', 'list-autoreact'],
    minArgs: 0,
    maxArgs: 0,
    permissions: 'MANAGE_MESSAGES',
    permissionError: 'You don\'t have the required permissions.',
    callback: async (message, arguments, text) => {

        const guildId = message.guild.id

        const results = await autoreactSchema.find({
            guildId,
        })

        let reply = ''

        if (!results) {
            const embed1 = new Discord.MessageEmbed()
            .setDescription(`${reply}This server has no autoreacts.`)
            .setColor('#8b0000')
            .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
    
            message.channel.send(embed1)
            return
        }

        for (const result of results) {
            const { targetWords, emoji, id } = result

            reply += `ID: \`${id}\`\nTarget Word(s): \`${targetWords}\`\nEmoji: \`${emoji}\`\n\n`
        }

        const embed = new Discord.MessageEmbed()
        .setDescription(reply)
        .setColor('#8b0000')
        .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")

        message.channel.send(embed)
    }
}