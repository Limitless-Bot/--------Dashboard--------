const Discord = require("discord.js")
const economy = require('../../economy')
const clockIn = require('../../schemas/clock-in-schema')

module.exports = {
  commands: ['force-clock-out'],
  expectedArgs: '<@ User>',
  minArgs: 0,
  maxArgs: 1,
  expectedArgs: 'force-clock-out',
  callback: async (message, arguments, author) => {

      

    const now = new Date(Date.now())

    const coins = 1
    const guildId = message.guild.id
    const target = message.mentions.users.first()
    if(!target) return message.channel.send("You need to @ mention a user!")
    const user = message.author
    let userId = ''
    
    if(target) {
      userId = target.id
    }

    if (!target) {
      userId = user.id
    }
    
    await clockIn.findOneAndUpdate({
      guildId,
      userId,
    },
    {
      current: false,
    },
    {
      upsert: true,
    })

    const newCoins = await economy.addCoins(guildId, userId, coins)

    const { guild } = message
    const icon = guild.iconURL()
    const embed = new Discord.MessageEmbed()
    .setTitle(`*Limitless*`)
    .setThumbnail(icon)
    .setColor('#990000')
    .setDescription(
`**__Force Clock Out!__**\nDate: ${now.toLocaleDateString()}\nTime: ${now.toLocaleTimeString()}\n\n<@${userId}> you have done ${newCoins} shift(s) this week!`
)
        message.channel.send(embed)



  }}