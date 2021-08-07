const Discord = require("discord.js")
const ms = require('ms')

module.exports = {
    commands: ['remind', 'remind-me', 'reminder'],
    expectedArgs: 'reminder <time> <reminder>',
    minArgs: 1,
    maxArgs: null,
    callback: (message, arguments, text) => {


        let time = arguments[0]
      

        let reason = arguments.slice(1).join(' ') || 'Empty'
    

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Limitless Reminder__**')
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
        .setDescription(`Time: \`${time}\`\nReason: \`${reason}\``)
        .setTimestamp()
        .setColor('RANDOM')
    message.reply('I have set your reminder:')
    message.channel.send(embed)

    let embed1 = new Discord.MessageEmbed()
        .setTitle('**__Limitless Reminder__**')
        .setAuthor(`${message.author.tag} I have your reminder!`, message.author.displayAvatarURL())
        .setDescription(`Time: \`${time}\`\nReminder: \`${reason}\`\nReminder setted in server: \`${message.guild.name}\``)
        .setTimestamp()
        .setColor('RANDOM')

    setTimeout(() => {       
    message.author.send(embed1)
    }, ms(time))
	
	},
}