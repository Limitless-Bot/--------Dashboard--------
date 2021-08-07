const Discord = require("discord.js")
const economy = require('../../economy')

module.exports = {
    commands: ['reset-shifts', 'resetShifts'],
    minArgs: 1,
    maxArgs: 1,
    permissions: 'ADMINISTRATOR',
    expectedArgs: "reset-shifts <Target user's @>",
    permissionError: 'You don\'t have the required permissions.',
    callback: async (message, arguments, text) => {
        const { guild, member } = message
        
        const mention = message.mentions.users.first()
        if (!mention) {
            message.reply('Please specify someone to reset their shifts.')
            return
        }
        const guildId = message.guild.id
        const userId = mention.id


        const getCoins = await economy.getCoins(guildId, userId)

        const coins = getCoins - getCoins

    
        const newCoins = await economy.addCoins(guildId, userId, coins - getCoins)

    const icon = guild.iconURL()
    const embed = new Discord.MessageEmbed()
    .setTitle(`*Limitless*`)
    .setThumbnail(icon)
    .setColor('RANDOM')
    .setDescription(`You have reset <@${mention.id}> shifts. They now have ${newCoins} shifts!`)

    message.channel.send(embed)

    message.delete()
    }
}