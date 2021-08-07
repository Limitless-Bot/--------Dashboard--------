const Discord = require("discord.js")

module.exports = {
    commands: ['hug'],
    expectedArgs: 'hug <@mention user>',
    minArgs: 1,
    maxArgs: null,
    callback: (message, arguments, text) => {

       

        const authorID = message.author.id
        
        const userMention = message.mentions.users.first();
        if(!userMention) return message.channel.send("You need to @ mention a user to hug!")
    const memberMention = message.mentions.members.first() || message.member;

    var res = [

        'https://i.pinimg.com/originals/76/78/41/767841d169040e265b6752339d7b46cb.gif',
        'https://media.tenor.com/images/471a8160f7ea6fa0d0b953282bb5aeb4/tenor.gif',
        'https://i.pinimg.com/originals/0a/16/52/0a1652de311806ce55820a7115993853.gif',
        'https://media.tenor.com/images/cb9bffb9b0e88808fa156f2432233aa7/tenor.gif',
        'https://i.pinimg.com/originals/42/94/de/4294deb5ec97086243174b085d609695.gif',
        'https://media1.giphy.com/media/xkQ7Hn3BoLzpolUguF/giphy.gif',
        'https://media4.giphy.com/media/KY3bghirDv3UyFInnX/giphy.gif',

    ]


    let embed = new Discord.MessageEmbed()

    .setTitle('**__HUG CAM__**')
    .setImage(res[Math.floor(Math.random() * res.length)])
    .setDescription(`<@${authorID}> hugs ${userMention}`)
    .setColor('RANDOM')

    message.channel.send(embed)

}}