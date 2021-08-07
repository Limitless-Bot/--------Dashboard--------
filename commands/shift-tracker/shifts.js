const Discord = require("discord.js")
const economy = require('../../economy')

module.exports = {
  commands: ['shifts'],
  maxArgs: 1,
  expectedArgs: "shifts [Target user's @]",
  callback: async (message) => {
    const { guild } = message
    const target = message.mentions.users.first() || message.author
    const targetId = target.id
    const { name } = guild
    const icon = guild.iconURL()
    

    const guildId = message.guild.id
    const userId = target.id

    const coins = await economy.getCoins(guildId, userId)

    let embed = new Discord.MessageEmbed()
.setTitle(`**__Shift Count__**`)
.setColor('RANDOM')
.setDescription(`\n\n${target} has a total of **${coins} shift(s)**!`)
.setFooter('Powered by Limitless')
.setThumbnail(icon)

message.channel.send(embed)

message.delete()
  },
}

