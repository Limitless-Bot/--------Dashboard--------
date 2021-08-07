const Discord = require("discord.js")
const cBase = require('../command-base')

module.exports = {
    commands: ['panic'],
    minArgs: 1,
    maxArgs: null,
    expectedArgs: 'panic <reason>',
    callback: (message, arguments, text) => {

      const prefix = cBase.prefix

      const developers = ['339286973212655616', '801246400338984961']

      if(!developers.includes(message.author.id)) { 
        message.reply('Your problems don\'t mean a thing, you ain\'t the one coding.**\n\n*Jk, this is a developer only command!*')
        return
    }

      if(developers.includes(message.author.id)) { 

      message.channel.send('<@&814916230762594394>')
        const { guild } = message
        const userId = message.author.id

        const { name } = guild
        const icon = guild.iconURL()
        const reason = message.content.replace(`${prefix}panic `,'')

        const embed = new Discord.MessageEmbed()
        .setTitle(`**__Limitless Emergancy Service__**`)
        .setColor('RANDOM')
        .setThumbnail(icon)
        .setDescription(`🚨🚨🚨 A wild developer <@${userId}> is having a serious mental breakdown🚨🚨🚨\n\nTheir issue is:\n ${reason} \n\n**🚨Help them immediately🚨**`)
        
    
    
        message.channel.send(embed)

        message.delete()
        
      }}}
