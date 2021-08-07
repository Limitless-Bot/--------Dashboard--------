const config = require('../../config.json')

module.exports = {
    commands: ['set-status'],
    expectedArgs: 'set-status <online/idle/dnd/invisible>',
    minArgs: 1,
    callback: (message, arguments, text, client) => {

      const developers = ['339286973212655616', '801246400338984961']

      if(!developers.includes(message.author.id)) { 
        message.reply('Did you really think you could control me? I am AI, **I am more powerful...**\n\n*Jk, this is a developer only command!*')
        return
    }

      if(developers.includes(message.author.id)) { 

        const content3 = arguments[0].toLowerCase()

        if (content3 != 'online')
        if (content3 != 'idle')
        if (content3 != 'dnd')
        if (content3 != 'invisible')
  
     
          
      {
        message.channel.send(`${content3} is not a status!`)
        return
      }

        client.user.setStatus(content3)
        message.reply(`You have changed my status to: ${content3}`)
    }}}