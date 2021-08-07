const Discord = require("discord.js")
const economy = require('../../economy')

module.exports = {
  commands: ['clear-user'],
  expectedArgs: 'clear-user <user ID>',
  minArgs: 1,
  maxArgs: 1,
  permissions: 'ADMINISTRATOR',
  permissionError: 'You don\'t have the required permissions.',
  callback: async (message, arguments, author) => {
    const guildId = message.guild.id
    const userId = arguments[0]

    const getCoins = await economy.getCoins(guildId, userId)

    const coins = getCoins - getCoins

    
    await economy.addCoins(guildId, userId, coins - getCoins)

    

    const { guild } = message
    const icon = guild.iconURL()
    const embed = new Discord.MessageEmbed()
    .setTitle(`*Limitless*`)
    .setThumbnail(icon)
    .setColor('RANDOM')
    .setDescription(`You have cleared <@${userId}> shifts.`)

      
    message.channel.send(embed)
  }}
