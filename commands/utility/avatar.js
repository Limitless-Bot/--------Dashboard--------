const Discord = require("discord.js")

module.exports = {
    commands: ['avatar', 'profile', 'pfp'],
    expectedArgs: 'avatar <@mention user>',
    minArgs: 1,
    maxArgs: null,
    callback: (message, arguments, text) => {
    
    const mention = message.mentions.members.first().user
    const mentionUser = message.mentions.users.first()


    if (arguments = mention) {

    const Embed = new Discord.MessageEmbed()
    .setTitle(mentionUser.username)
    .setColor('RANDOM')
    .setImage(mention.displayAvatarURL({ format: 'png'}))
    .setFooter('Powered By Limitless')
    return message.channel.send(Embed);
    }


},
};

