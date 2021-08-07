const Discord = require("discord.js")

module.exports = {
    commands: ['kill'],
    expectedArgs: 'kill <@mention user>',
    minArgs: 1,
    maxArgs: null,
    callback: (message, arguments, text) => {
    

        const authorID = message.author.id
        
        const userMention = message.mentions.users.first();
        if(!userMention) return message.channel.send("You need to @ mention a user to kill!")
    const memberMention = message.mentions.members.first() || message.member;

    var res = [
        'https://i.gifer.com/SC2T.gif',
        'https://orig00.deviantart.net/97f4/f/2013/342/5/4/market_gardener_kill__tf2___flash_animation_by_chromel-d6x6l8g.gif',
        'https://media.tenor.com/images/d7c53b5ce38c0fd29028c9bfd06fe20a/tenor.gif',
        'https://media.giphy.com/media/1hMgCfglrcw6HahbXp/giphy.gif',
        'https://orig00.deviantart.net/7312/f/2005/196/a/7/sekac2_0.gif',
        'https://media.giphy.com/media/pyFrNJBtTMSAV2R8Ch/giphy.gif',
        'https://media1.tenor.com/images/361a7354f193af1b1ace5843dcaeeb02/tenor.gif?itemid=18599860'
    ]


    let embed = new Discord.MessageEmbed()

    .setTitle('**__KILL CAM__**')
    .setImage(res[Math.floor(Math.random() * res.length)])
    .setDescription(`<@${authorID}> kills ${userMention}`)
    .setColor('RANDOM')

    message.channel.send(embed)

}}