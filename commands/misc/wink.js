const Discord = require("discord.js")

module.exports = {
    commands: ['wink'],
    expectedArgs: 'wink <@mention user>',
    minArgs: 1,
    maxArgs: null,
    callback: (message, arguments, text) => {


        const authorID = message.author.id
        
        const userMention = message.mentions.users.first();
        if(!userMention) return message.channel.send("You need to @ mention a user to hug!")
    const memberMention = message.mentions.members.first() || message.member;

    var res = [

        'https://i.pinimg.com/originals/03/e9/dd/03e9ddaca81f336a82de1616d6fed4a5.gif',
        'https://media.tenor.com/images/5283c36ef9df9d0311a9e0b231354a12/tenor.gif',
        'https://i.pinimg.com/originals/05/50/1c/05501c096420da9237dd794b0461dbc7.gif',
        'https://media3.giphy.com/media/l4FB6rJP7S6wxJvKU/200.gif',
        'https://media2.giphy.com/media/dZ5ju1FjkHhoBkcBrv/source.gif',
        'https://i.pinimg.com/originals/80/b1/d6/80b1d6413f857e2b5ca2e781ece26862.gif',
        'https://media.tenor.com/images/20ef4777246444e3ce9e5a6cf41477d0/tenor.gif',
        'https://i.pinimg.com/originals/f6/c3/c9/f6c3c910f8cf76eaafa6a8978a170cf3.gif',
        'https://media2.giphy.com/media/v8pACm7D82olW/giphy.gif',
        'https://thumbs.gfycat.com/ConstantAntiqueAustrianpinscher-small.gif',
        'https://i.pinimg.com/originals/5c/3b/63/5c3b631c26e76ebb52e83078d8c89e92.gif',

    ]


    let embed = new Discord.MessageEmbed()

    .setTitle('**__WINK CAM__**')
    .setImage(res[Math.floor(Math.random() * res.length)])
    .setDescription(`<@${authorID}> winks at ${userMention}`)
    .setColor('RANDOM')

    message.channel.send(embed)

}}