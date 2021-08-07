const Discord = require("discord.js")
const ms = require('ms')

module.exports = {
    commands: ['timer', 'set-timer', 'setTimer'],
    expectedArgs: 'timer <time> <reason>',
    minArgs: 1,
    maxArgs: null,
    callback: (message, arguments, text) => {


        let time = arguments[0]
        if(ms(time) > ms("1d"))return message.reply("You can not set your timer for more than 1 day.")

        let reason = arguments.slice(1).join(' ') || 'Empty'
    

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Limitless Timer__**')
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
        .setDescription(`Time: \`${time}\`\nReason: \`${reason}\``)
        .setTimestamp()
        .setColor('RANDOM')
    
    message.channel.send(embed)

    let embed1 = new Discord.MessageEmbed()
        .setTitle('**__Limitless Timer__**')
        .setAuthor(`${message.author.tag} Your timer has ended`, message.author.displayAvatarURL())
        .setDescription(`Time: \`${time}\`\nReason: \`${reason}\`\nTimer setted in server: \`${message.guild.name}\``)
        .setTimestamp()
        .setColor('RANDOM')

    setTimeout(() => {       
    message.author.send(embed1)
    }, ms(time))
	
	},
}