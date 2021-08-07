const Discord = require("discord.js")
const economy = require('../../economy')
const clockIn = require('../../schemas/clock-in-schema')
const timeSchema = require('../../schemas/shift-time')

module.exports = {
  commands: ['clock-out'],
  minArgs: 0,
  maxArgs: 0,
  expectedArgs: 'clock-out',
  callback: async (message, arguments, author) => {

      
    const now = new Date(Date.now())

    const coins = 1
    const guildId = message.guild.id
    const userId = message.author.id

    const result = await clockIn.findOne({
        userId,
        current: true
    })

    if (!result) {
    const newCoins = await economy.addCoins(guildId, userId, coins)

    const { guild } = message
    const icon = guild.iconURL()
    const embed = new Discord.MessageEmbed()
    .setTitle(`**__Limitless__**`)
    .setThumbnail(icon)
    .setColor('#990000')
    .setDescription(
`**Clocked Out!**\nDate: ${now.toLocaleDateString()}\nTime: ${now.toLocaleTimeString()}\n\n<@${message.author.id}> you have done ${newCoins} shift(s) this week!`
)
        message.channel.send(embed)
    }


    if (result) {

        const { guild } = message
        const icon = guild.iconURL()

        const timeS = await timeSchema.findOne({
          guildId
      })
      let duration = ''

      if (timeS) {
          duration += timeS.time
      }
      if (!timeS) {
          duration += 20
      }
      
        const embed = new Discord.MessageEmbed()
        .setTitle(`*Limitless*`)
        .setThumbnail(icon)
        .setColor('#990000')
        .setDescription(`You have not finished your ${duration} minute shift.`)

    message.channel.send(embed)
    
    }


  }}