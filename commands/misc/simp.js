const Discord = require("discord.js")

module.exports = {
    commands: ['simp'],
    expectedArgs: 'simp [@mention user]',
    minArgs: null,
    maxArgs: null,
    callback: async (message, arguments, text) => {
        
        const { MessageEmbed } = require("discord.js")

        let rate = (Math.floor(Math.random() * Math.floor(100)));

        let user = message.mentions.users.first() || message.author;

        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Simpness Rate')
        .setDescription(`${user} is ${rate}% simp 😳`)
        .setTimestamp()

        message.channel.send(embed)
}}

