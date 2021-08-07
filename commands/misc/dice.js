const Discord = require("discord.js")

module.exports = {
    commands: ['dice', 'roll', 'dice-roll'],
    expectedArgs: 'dice',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {

        const dicepics = [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/557px-Dice-1-b.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/1200px-Dice-2-b.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/1200px-Dice-3-b.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/557px-Dice-4-b.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/768px-Dice-5-b.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/768px-Dice-6-b.svg.png',
        ]

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Rolled Dice!__**')
        .setFooter(`${message.author.username}`)
        .setColor('RANDOM')
        .setImage(dicepics[Math.floor(Math.random() * dicepics.length)])

        message.channel.send(embed)
    }}