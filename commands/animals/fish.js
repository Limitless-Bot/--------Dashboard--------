const Discord = require("discord.js")

module.exports = {
    commands: ['fish'],
    expectedArgs: 'fish',
    minArgs: 0,
    maxArgs: 0,
    category: 'Animal_1',
    expectedArgs: 'fish',
    example: 'fish',
    description: 'Shows a picture of a fish.',
    callback: (message, arguments, text) => {

        const pics = [
            'https://www.thesprucepets.com/thmb/rzCIw-LNjSkbij5KF01awP2p5CQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/step_6-clownfish-596f711ac4124400102014c2.jpg',
            'https://i.redd.it/kgqdksfczrly.jpg',
            'http://i.imgur.com/waSXUAg.png?1',
            'https://cf.ltkcdn.net/small-pets/images/std/246148-800x589r1-GettyImages-1050490488.jpg',
        ]


            let embed = new Discord.MessageEmbed()
        .setTitle('**__Fish Picture__**')
        .setFooter(`${message.author.username}`)
        .setColor('RANDOM')
        .setImage(pics[Math.floor(Math.random() * pics.length)])

        message.channel.send(embed)
    }}