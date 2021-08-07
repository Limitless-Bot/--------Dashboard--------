const Discord = require("discord.js")

module.exports = {
    commands: ['gorilla'],
    expectedArgs: 'gorilla',
    minArgs: 0,
    maxArgs: 0,
    category: 'Animal_2',
    expectedArgs: 'gorilla',
    example: 'gorilla',
    description: 'Shows a picture of a gorilla.',
    callback: (message, arguments, text) => {

        const pics = [
            'https://i.ytimg.com/vi/FFdlMlcjuzw/maxresdefault.jpg',
            'https://i.ytimg.com/vi/PUbBRG2nhqw/maxresdefault.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/71AMTk4fDZL.jpg',
            'https://i.redd.it/3sdittrlpa161.png',
            'https://s3.amazonaws.com/mongabay-images/12/kahili-and-baby-008.1800.jpg',
            'https://i.pinimg.com/736x/83/c9/49/83c949ab7936785bf2c414f2c5aede9c.jpg',
            'https://ih1.redbubble.net/image.1092762559.4966/flat,750x1000,075,f.u1.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/71eVBWNMSZL.jpg',
            'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/close-up-of-a-cute-baby-gorilla-and-eric-gevaert.jpg',

        ]

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Gorilla Picture__**')
        .setFooter(`${message.author.username}`)
        .setColor('RANDOM')
        .setImage(pics[Math.floor(Math.random() * pics.length)])

        message.channel.send(embed)
    }}