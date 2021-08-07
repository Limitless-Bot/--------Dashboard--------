const Discord = require("discord.js")

module.exports = {
    commands: ['flip-coin', 'coin-flip', 'coin'],
    expectedArgs: 'flip-coin',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {

        const money = [
        'https://www.pngkey.com/png/detail/438-4381412_silver-coins-png-download-head-of-a-coin.png',
        'https://www.checkyourchange.co.uk/wp-content/uploads/2015/03/10p1977rev.jpg'
        ]

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Coin Flip!__**')
        .setFooter(`${message.author.username}`)
        .setColor('RANDOM')
        .setImage(money[Math.floor(Math.random() * money.length)])

        message.channel.send(embed)

    }}