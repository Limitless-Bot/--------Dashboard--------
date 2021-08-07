const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const muteSchema = require('../../schemas/mute-schema')

module.exports = {
    commands: ['checkmute'],
    permissionError: "You need the permission `MUTE_MEMBERS`",
    expectedArgs: 'checkmute <@person or target users ID>',
    minArgs: 1,
    maxArgs: 1,
    permissions: 'MUTE_MEMBERS',
    callback: async (message, arguments, text) => {

     

        const { guild } = message

        
        const mention = message.mentions.users.first()
        if(!mention) return message.channel.send("You need to @ mention a user!")
        
        
        if (mention) {
            const mentionId = mention.id

        const id = mentionId

        const target = guild.members.cache.get(id)
        const isInDiscord = !!target 

        const currentMute = await muteSchema.findOne({
            userId: id,
            guildId: guild.id,
            current: true
        })

        const embed = new MessageEmbed()
        .setAuthor(`Mute info for ${target ? target.user.tag : id}`, target ? target.user.displayAvatarURL() : '')
        .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
        .setColor('RANDOM')
        .addField('Currently muted', currentMute ? 'Yes' : 'No')
        .addField('Is in Discord', isInDiscord ? 'Yes' : 'No')

        if (currentMute) {
            const date = new Date(currentMute.expires)

            embed
                .addField('Muted by', `<@${currentMute.staffId}>`)
                .addField('Muted for', currentMute.reason.toLowerCase())
                .addField('Mute expires', `${date.toLocaleString()} GMT`)
        }

        message.channel.send(embed) } else {

        const id = arguments[0]


        const target = guild.members.cache.get(id)
        const isInDiscord = !!target 

        const currentMute = await muteSchema.findOne({
            userId: id,
            guildId: guild.id,
            current: true
        })

        const embed = new MessageEmbed()
        .setAuthor(`Mute info for ${target ? target.user.tag : id}`, target ? target.user.displayAvatarURL() : '')
        .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
        .addField('Currently muted', currentMute ? 'Yes' : 'No')
        .addField('Is in Discord', isInDiscord ? 'Yes' : 'No')

        if (currentMute) {
            const date = new Date(currentMute.expires)

            embed
                .addField('Muted by', `<@${currentMute.staffId}>`)
                .addField('Muted for', currentMute.reason.toLowerCase())
                .addField('Mute expires', `${date.toLocaleString()} GMT`)
        }

        message.channel.send(embed)
    }

        },
    }