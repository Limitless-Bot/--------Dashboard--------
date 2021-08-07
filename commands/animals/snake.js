const Discord = require("discord.js")

module.exports = {
    commands: ['snake'],
    expectedArgs: 'snake',
    minArgs: 0,
    maxArgs: 0,
    category: 'Animal_3',
    expectedArgs: 'snake',
    example: 'snake',
    description: 'Shows a picture of a snake.',
    callback: (message, arguments, text) => {

        const pics = [
            'https://i.pinimg.com/736x/38/03/25/380325d729377fc08325c079b0a35b38.jpg',
            'https://www.everythingreptiles.com/wp-content/uploads/2020/11/Cute-Snakes.jpg',
            'https://i.ytimg.com/vi/XJ2hd2cKAJo/maxresdefault.jpg',
            'https://i.pinimg.com/564x/e3/21/dc/e321dc8fff68010272de94bd6f305c66.jpg',
            'https://www.thesprucepets.com/thmb/tZWEbg2OhYDvzFm7t9l71IlvZNQ=/3840x3840/smart/filters:no_upscale()/GettyImages-530917116-583b3f683df78c6f6ae77042.jpg',
            'https://i.ytimg.com/vi/eThPalffNsc/maxresdefault.jpg',
            'https://campingfunzone.com/wp-content/uploads/2020/11/dreamstime_s_125465855.jpg',
            'http://reptile.guide/wp-content/uploads/2020/03/Snooty-McCutie.jpg',
            'https://emborapets.com/wp-content/uploads/2018/09/Cutest-pet-snakes.jpg',
            'https://qph.fs.quoracdn.net/main-qimg-ad2df71f711af7f4f06641889b97e5cb',
            'https://i.redd.it/kr2f8tn5xuw21.jpg',

        ]

        let embed = new Discord.MessageEmbed()
            .setTitle('**__Snake Picture__**')
            .setFooter(`${message.author.username}`)
            .setColor('RANDOM')
            .setImage(pics[Math.floor(Math.random() * pics.length)])
    
            message.channel.send(embed)
        }}