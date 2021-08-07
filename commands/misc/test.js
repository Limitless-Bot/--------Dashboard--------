const Discord = require("discord.js")

module.exports = {
    commands: ['test', 'testing'],
    minArgs: 0,
    maxArgs: 1,
    expectedArgs: 'test',
    permissions: 'SEND_MESSAGES',
    callback: (message, arguments, text) => {
        const { guild } = message

        const { name } = guild
        const icon = guild.iconURL()
        const authorID = message.author.id
        const now = new Date(Date.now())
    
        const embed = new Discord.MessageEmbed()
        .setTitle(`**__Limitless__**`)
        .setColor('RANDOM')
        .setThumbnail(icon)
        .setDescription(`<@${authorID}> The bot is working!! ||I guess the devs finally did something right||`)




        message.channel.send(embed)
        
    }}
  