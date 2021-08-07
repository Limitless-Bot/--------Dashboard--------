const Discord = require("discord.js")
const cBase = require('../command-base')


module.exports = {
    commands: ['setup-moderation','setup-mod'],
    permissionError: "You need to be an administrator to set this up!",
    minArgs: 0,
    maxArgs: 1,
    expectedArgs: 'setup-mod',
    permissions: 'ADMINISTRATOR',
    callback: (message, arguments, text) => {

        const { guild } = message

        const { name } = guild
        const icon = guild.iconURL()
        const authorID = message.author.id
        const time = message.createdTimestamp
        const now = new Date(Date.now())
        const prefix = cBase.prefix
        let embed = new Discord.MessageEmbed()

.setTitle('**__Server Moderation Setup Steps__**')
.setAuthor(`${message.author.username}`)
.setFooter('Powered by Limitless')
.setThumbnail(icon)
.setColor('RANDOM')
.setDescription(`1. Run the command **${prefix}set-mod-logs #channel**\n\n2. Setup a role called __exactly__ "Muted" and setup the permissions as follows:\n\n- Make sure that Limitless role is above the Muted role\n- Make sure your muted role is above the role of the person you want to mute\n- Setup your channel permissions so the Muted role cannot send messages.\n\n**Now you can use all the moderation commands!**`)

message.channel.send(embed)

    }}