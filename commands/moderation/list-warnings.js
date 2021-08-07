const Discord = require('discord.js')
const warnSchema = require('../../schemas/warn-schema')

module.exports = {
    commands: ['listwarnings', 'lw', 'warnings'],
    minArgs: 1,
    expectedArgs: "lw <Target user's @>",
    callback: async (message, arguments, text) => {

       

        const target = message.mentions.users.first()
        if (!target) {
            message.reply('Please specify a user to load the warnings for.')
            return
        }

        const guildId = message.guild.id
        const userId = target.id

        const results = await warnSchema.find({
            guildId,
            userId
        })

        let reply = `__**Previous warnings for ${target}**__\n\n`

       

        if (!results[0]) {
            const embed1 = new Discord.MessageEmbed()
            .setDescription(`${target} has no warnings.`)
            .setColor('#8b0000')
            .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
    
            message.channel.send(embed1)
            return
        }

        for (const result of results) {
            const { staffTag, staffId, userId, guildId, timestamp, reason, id } = result

            const date = new Date
            const timeAndDate = date.toDateString(timestamp)

            reply += `ID: \`${id}\`\nWarned by: \`${staffTag}\`\nDate: \`${timeAndDate}\`\nReason: \`${reason}\`\n\n`
        }

        const embed = new Discord.MessageEmbed()
        .setDescription(reply)
        .setColor('#8b0000')
        .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")

        message.channel.send(embed)
    }
}