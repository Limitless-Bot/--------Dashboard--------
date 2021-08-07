const Discord = require("discord.js")

module.exports = {
      commands: ['servers'],
      expectedArgs: 'servers',
      permissionError: 'You do not have permission to run this command.',
      minArgs: 0,
      maxArgs: 0,
      callback: (message, arguments, text) => {

        const developers = ['339286973212655616', '801246400338984961']

        if(!developers.includes(message.author.id)) { 
          message.reply('Did you really think you could control me? I am AI, **I am more powerful...**\n\n*Jk, this is a developer only command!*')
          return
      }

      if(developers.includes(message.author.id)) { 

        const { guild } = message

        const { name, cache, client} = guild
        const icon = guild.iconURL()

        client.guilds.cache.forEach((guild) => {
          let embed = new Discord.MessageEmbed()
          .setTitle(`Limitless`)
          .setColor('RANDOM')
          .setDescription(`${guild.name} has a total of ${guild.memberCount} members.`)
          .setTimestamp()


          message.channel.send(embed)
        })
        
      }}}