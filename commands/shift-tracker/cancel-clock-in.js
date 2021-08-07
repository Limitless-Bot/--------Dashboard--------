const Discord = require("discord.js")
const clockIn = require('../../schemas/clock-in-schema')

module.exports = {
  commands: ['cancel-clock-in'],
  minArgs: 0,
  maxArgs: 0,
  callback: async (message, arguments, author) => {

    const now = new Date(Date.now())
    const guildId = message.guild.id
    const userId = message.author.id
    
    
    await clockIn.findOneAndUpdate({
      guildId,
      userId,
      current: true
    },
    {
      current: false,
    },
    {
      upsert: true,
    })

    const { guild } = message
    const icon = guild.iconURL()
    const embed = new Discord.MessageEmbed()
    .setTitle(`*Limitless*`)
    .setThumbnail(icon)
    .setColor('#990000')
    .setDescription(`**__ Cancelled Clock In!__**\nDate: ${now.toLocaleDateString()}\nTime: ${now.toLocaleTimeString()}`)
        
    message.channel.send(embed)


  }}