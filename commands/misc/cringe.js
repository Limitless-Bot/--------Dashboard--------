const Discord = require("discord.js")

module.exports = {
    commands: ['cringe'],
    expectedArgs: 'cringe [@mention user]',
    minArgs: null,
    maxArgs: null,
    callback: async (message, arguments, text) => {

        const { MessageEmbed } = require("discord.js")
        let rate = (Math.floor(Math.random() * Math.floor(100)));

        let user = message.mentions.users.first() || message.author;

        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("CRINGE Rate")
        .setDescription(`${user} is ${rate}% cringe :joy:`)
        .setTimestamp()
        
        message.channel.send(embed)

    }}