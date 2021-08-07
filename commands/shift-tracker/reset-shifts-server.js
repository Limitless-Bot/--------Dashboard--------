const Discord = require("discord.js")
const profileSchema = require('../../schemas/profile-schema')

module.exports = {
    commands: ['reset-shifts-server', 'reset-server-shifts'],
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: 'reset-shifts-server',
    callback: async (message, arguments, text) => {
        const { guild } = message
        
        const guildId = message.guild.id

        await profileSchema.deleteMany({
            guildId
        },
        {
            guildId
        })
    
       

    const icon = guild.iconURL()
    const embed = new Discord.MessageEmbed()
    .setTitle(`*Limitless*`)
    .setThumbnail(icon)
    .setColor('RANDOM')
    .setDescription(`You have reset ${guild.name} shifts.`)

    message.channel.send(embed)

    message.delete()
    }
}