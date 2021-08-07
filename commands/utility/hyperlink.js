const Discord = require("discord.js")

module.exports = {
    commands: ['hyperlink'],
    minArgs: 2,
    maxArgs: null,
    expectedArgs: 'hyperlink <Link> <What you want it to display>',
    callback: async (message, args, text) => {
        
        const link = message.content.split(' ')[1]
        const display = message.content.split(' ').slice(2).join(' ');

        message.delete()
        
        const embed = new Discord.MessageEmbed()
        .setDescription(`**[${display}](${link})**`)
        .setColor('RANDOM')
   
        
        message.channel.send(embed)

    }}