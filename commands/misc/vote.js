const Discord = require("discord.js")
const cBase = require('../command-base')

module.exports = {
    commands: ['vote'],
    expectedArgs: 'vote <what you want people to vote on>',
    minArgs: 1,
    maxArgs: null,
    callback: (message, arguments, text) => {

        const prefix = cBase.prefix
        
        message.delete()

        const { guild } = message

        const msg = message.content.replace(`${prefix}vote `, '')
        

        const { name } = guild
        const icon = guild.iconURL()
        const authorID = message.author.id
        const time = message.createdTimestamp
        const now = new Date(Date.now())
        const textChannel = message.mentions.channels.first()
        const attachments = (message.attachments).array();
        const attachment = attachments[0]


        const embed = new Discord.MessageEmbed()
        .setTitle(`**__Vote__**`)
        .setColor('RANDOM')
        .setThumbnail(icon)
        .setFooter(`\n\n Vote started by: ${message.author.username}`)
            if (attachments.length !== 0) {
            embed.setImage(attachment.proxyURL)
        }
        if (message.length !== 0) {
            embed.setDescription(`**\nPlease vote on the following message:**\n\n${msg}`)
        }
      

        message.channel.send(embed).then(async (message) => {
            await message.react("✅");
            await message.react("❌");
        })
    }}
       