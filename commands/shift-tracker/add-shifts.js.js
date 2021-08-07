const Discord = require("discord.js")
const economy = require('../../economy')

module.exports = {
  commands: ['add-shifts'],
  minArgs: 2,
  maxArgs: 2,
  expectedArgs: "add-shifts <@user> <shift amount>",
  permissionError: 'You must be an administrator to use this command.',
  permissions: 'ADMINISTRATOR',
  callback: async (message, arguments) => {
    const mention = message.mentions.users.first()

    if (!mention) {
      message.reply('Please tag a user to add shifts to.')
      return
    }

    const coins = arguments[1]
    if (isNaN(coins)) {
      message.reply('Please provide a valid numnber of shifts.')
      return
    }

    const guildId = message.guild.id
    const userId = mention.id

    const newCoins = await economy.addCoins(guildId, userId, coins)

    const { guild } = message
    const icon = guild.iconURL()
    const embed = new Discord.MessageEmbed()
    .setTitle(`*Limitless*`)
    .setThumbnail(icon)
    .setColor('RANDOM')
    .setDescription(
      `You have added <@${userId}> ${coins} shifts(s). \nThey now have ${newCoins} shifts(s)!`)

      
    message.channel.send(embed)
  },
}
