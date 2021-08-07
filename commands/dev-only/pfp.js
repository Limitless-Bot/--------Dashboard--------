const Discord = require("discord.js")
const cBase = require('../command-base')

module.exports = {
    commands: ['pfp'],
    minArgs: 1,
    maxArgs: null,
    expectedArgs: 'pfp <image URL>',
    callback: (message, arguments, text, client) => {

        

      const prefix = cBase.prefix

      const developers = ['339286973212655616', '801246400338984961']

      if(!developers.includes(message.author.id)) { 
        message.reply('Did you really think you could control me? I am AI, **I am more powerful...**\n\n*Jk, this is a developer only command!*')
        return
    }

      if(developers.includes(message.author.id)) { 

        const newpfp = message.content.replace(`${prefix}pfp `,'')
          
   

  

    client.user.setAvatar(newpfp) 

    message.reply('You have changed my profile picture!')

      }}}
