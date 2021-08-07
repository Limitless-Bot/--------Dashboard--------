const Discord = require("discord.js")

module.exports = {
    commands: ['slap'],
    expectedArgs: 'slap <@mention user>',
    minArgs: 1,
    maxArgs: null,
    callback: (message, arguments, text) => {

       

        const authorID = message.author.id
        
        const userMention = message.mentions.users.first();
        if(!userMention) return message.channel.send("You need to @ mention a user to slap!")
    const memberMention = message.mentions.members.first() || message.member;

    var res = [

        'https://orig00.deviantart.net/0f60/f/2012/205/a/4/slap_animation_by_scarletprince-d58fvbl.gif',
        'https://i.pinimg.com/originals/4b/40/f7/4b40f7066040929c8dae77bbec82e96f.gif',
        'https://media0.giphy.com/media/QFacpnPZwIqXe/source.gif',
        'https://media.giphy.com/media/yMAwOsJr9u6ST1M2fU/giphy.gif',
        'https://media.giphy.com/media/1wr1JM28YV5JvsLTtP/giphy.gif',
        'https://media.tenor.co/images/84d4cdb3f9b72b9249dfc076b602cfac/tenor.gif',

    ]


    let embed = new Discord.MessageEmbed()

    .setTitle('**__SLAP CAM__**')
    .setImage(res[Math.floor(Math.random() * res.length)])
    .setDescription(`<@${authorID}> slaps ${userMention}`)
    .setColor('RANDOM')

message.channel.send(embed)

    }}