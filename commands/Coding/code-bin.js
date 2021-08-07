const Discord = require("discord.js")

module.exports = {
    commands: ['code-bin', 'bin', 'code'],
    minArgs: 0,
    maxArgs: 1,
    expectedArgs: 'bin',
    callback: (message, arguments, text) => {

        const { guild } = message

        const { name } = guild
        const icon = guild.iconURL()
        const authorID = message.author.id
        const now = new Date(Date.now())
    
        const embed = new Discord.MessageEmbed()
        .setTitle('Code Upload Website')
        .setDescription('Use [this website](https://srcshare.io/) to upload code and errors as well as a description, allows mutli collaboration and compatible on mobile for quick fixes')
        .setThumbnail(icon)
        .setColor('RANDOM')
        .setFooter('💻 Developer\'s rule 💻')

        message.channel.send(embed)

    }}