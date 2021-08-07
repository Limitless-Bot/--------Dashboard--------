const Discord = require("discord.js")

module.exports = {
      commands: ['users', 'membercount'],
      minArgs: 0,
      maxArgs: 0,
      expectedArgs: 'membercount',
      callback: (message, arguments, text) => {

        const { guild } = message

        const { name, region, memberCount, owner, afkTimeout} = guild
        const icon = guild.iconURL()

        const embed = new Discord.MessageEmbed()
        .setFooter(`${message.author.username}`)
        .setDescription(`Member Count: **${guild.memberCount}**`)
        .setColor('RANDOM')

        message.channel.send(embed)



      }}