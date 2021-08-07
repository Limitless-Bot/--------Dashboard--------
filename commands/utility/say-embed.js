const Discord = require("discord.js")
const cBase = require('../command-base')

module.exports = {
    commands: ['embed'],
    expectedArgs: 'embed <what you want the bot to embed>',
    minArgs: 1,
    maxArgs: null,
    
    callback: (message, arguments, text) => {
        
        const prefix = cBase.prefix

        message.delete()

        const { guild } = message

        const msg = message.content.replace(`${prefix}embed `, '')
        

        const { name } = guild
        const icon = guild.iconURL()
        const authorID = message.author.id
        const time = message.createdTimestamp
        const now = new Date(Date.now())
        const textChannel = message.mentions.channels.first()


        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(icon)
        .setDescription(`${msg}`)
        .setFooter(message.author.username)

        message.channel.send(embed)

    }}