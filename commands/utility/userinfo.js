const Discord = require("discord.js")

module.exports = {
    commands: ['userinfo'],
    expectedArgs: 'userinfo <@mention user>',
    minArgs: 1,
    maxArgs: null,
    callback: (message, arguments, text) => {
        
        const member = message.mentions.users.first();
        const userMention = message.mentions.users.first();
        if(!userMention) return message.channel.send("You need to @ mention a user")
    const memberMention = message.mentions.members.first() || message.member;

    let userinfo = {};
    userinfo.bot = userMention.bot;
    userinfo.createdat = userMention.createdAt;
    userinfo.discrim = userMention.discriminator;
    userinfo.id = userMention.id;
    userinfo.mfa = userMention.mfaEnabled;
    userinfo.pre = userMention.premium;
    userinfo.presen = userMention.presence;
    userinfo.tag = userMention.tag;
    userinfo.uname = userMention.username;
    userinfo.verified = userMention.verified;

    userinfo.avatar = userMention.avatarURL()


    var myInfo = new Discord.MessageEmbed()
        .setAuthor(userinfo.uname, userinfo.avatar)
        .addField("**Is the user a Bot?**",userinfo.bot, true)
        .addField("**Joined Discord:**",userinfo.createdat, true)
        .addField('Joined server on', `\`${moment(member.joinedAt).format('MMM DD YYYY')}\``, true)
        .addField("**User ID:**",userinfo.id, true)
        .addField("**Discord Username:**",userinfo.tag, true)
        .setColor('RANDOM')
        .setTitle("__**About this user...**__")
        .setThumbnail(userinfo.avatar)

       

        message.channel.send(myInfo);

}

}