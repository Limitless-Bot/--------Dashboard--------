const Discord = require("discord.js")

module.exports = {
    commands: ['kiss'],
    expectedArgs: 'kiss <@mention user>',
    minArgs: 1,
    maxArgs: null,
    callback: (message, arguments, text) => {

      

        const authorID = message.author.id
        
        const userMention = message.mentions.users.first();
        if(!userMention) return message.channel.send("You need to @ mention a user to kiss!")
    const memberMention = message.mentions.members.first() || message.member;

    var res = [

        'https://i.pinimg.com/originals/58/92/f9/5892f945987e7f0d64504dc3e951938a.gif',
        'https://66.media.tumblr.com/8f0347e737c71bea85f6265422f337c2/tumblr_pu7ajqQmmb1w5ydlio1_400.gifv',
        'https://thumbs.gfycat.com/AngryTautHartebeest-size_restricted.gif',
        'https://media2.giphy.com/media/bGm9FuBCGg4SY/giphy.gif',
        'http://gifimgs.com/animations/creatures-cartoons/cartoon-characters/disney-kissing.gif',
        'https://acegif.com/wp-content/uploads/anime-kiss-6.gif'

    ]


    let embed = new Discord.MessageEmbed()

    .setTitle('**__KISS CAM__**')
    .setImage(res[Math.floor(Math.random() * res.length)])
    .setDescription(`<@${authorID}> kisses ${userMention}`)
    .setColor('RANDOM')

    message.channel.send(embed)

}}