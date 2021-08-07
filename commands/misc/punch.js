const Discord = require("discord.js")

module.exports = {
    commands: ['punch'],
    expectedArgs: 'punch <@mention user>',
    minArgs: 1,
    maxArgs: null,
    callback: (message, arguments, text) => {

       

        const authorID = message.author.id
        
        const userMention = message.mentions.users.first();
        if(!userMention) return message.channel.send("You need to @ mention a user to punch!")
    const memberMention = message.mentions.members.first() || message.member;

    var res = [

        'https://reactiongifs.me/wp-content/uploads/2014/03/minions-sucker-punch-despicable-me.gif',
        'https://media2.giphy.com/media/YonPIP0GINe2WqrQmy/giphy.gif',
        'https://www.commonsenseevaluation.com/wp-content/uploads/2017/04/Knockout.gif',
        'https://media.giphy.com/media/TpAtVLFuHpOq4/giphy.gif',
        'https://cdn.dribbble.com/users/474893/screenshots/1627263/boxing.gif',
        'https://66.media.tumblr.com/b4ac95dcb0fae2373f82e88191162bb6/tumblr_pn38lhZCB61scxiy5_540.gif',
        
    ]


    let embed = new Discord.MessageEmbed()

    .setTitle('**__PUNCH CAM__**')
    .setImage(res[Math.floor(Math.random() * res.length)])
    .setDescription(`<@${authorID}> punches ${userMention}`)
    .setColor('RANDOM')

message.channel.send(embed)

    }}