const Discord = require("discord.js")

module.exports = {
      commands: ['set-presence-guilds'],
      expectedArgs: 'set-presence-guilds',
      permissionError: 'You do not have permission to run this command.',
      minArgs: 0,
      maxArgs: 0,
      callback: (message, arguments, text, client) => {

        const developers = ['339286973212655616', '801246400338984961']

      

      if(!developers.includes(message.author.id)) { 
          message.reply('Did you really think you could control me? I am AI, **I am more powerful...**\n\n*Jk, this is a developer only command!*')
          return
      }

      if(developers.includes(message.author.id)) { 

        client.user.setActivity(` ${client.guilds.cache.size} Servers | ${client.users.cache.size} Users`, { type: 'WATCHING' })
        message.reply('I set my presence to include total server and member count!')

      }}}