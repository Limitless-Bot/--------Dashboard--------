const config = require('../../config.json')

module.exports = {
    commands: ['set-activity'],
    expectedArgs: 'set-activity <activity> <presence>',
    minArgs: 0,
    callback: (message, arguments, text, client) => {

      const developers = ['339286973212655616', '801246400338984961']

      if(!developers.includes(message.author.id)) { 
        message.reply('Did you really think you could control me? I am AI, **I am more powerful...**\n\n*Jk, this is a developer only command!*')
        return
    }

      if(developers.includes(message.author.id)) { 


    const content3 = arguments[0].toUpperCase()
    const content4 = message.content.replace(`${config.prefix}set-activity ${content3}`, '')
    const content5 = content4.replace(` `,'')
    const content6 = content5.replace(`$set-activity${content3} `, '')
 

    if (content3 != 'PLAYING')
      if (content3 != 'STREAMING')
        if (content3 != 'WATCHING')
          if (content3 != 'LISTENING')
            if (content3 != 'COMPETING')
    {
      message.channel.send(`${content3} is not an activity!`)
      return
    }

    client.user.setActivity(`${content6}`, { type: `${content3}` })
  
  message.reply(`The bots activity has been set to \`${content3}\``)
    }}}