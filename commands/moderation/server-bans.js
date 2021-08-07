const Discord = require("discord.js")

module.exports = {
    commands: ['server-bans', 'bans'],
    expectedArgs: 'server-bans',
    permission: 'BAN_MEMBERS',
    minArgs: 0,
    callback: async (message, args, cmd, client, discord, profileData) => {

    
     
        var amount = 1;
        const fetchBans = message.guild.fetchBans();
        const bannedMembers = (await fetchBans)
        .map((member) => `> __${amount++}.__ **${member.user.tag}** | (*${member.user.id}*)`)
        .join("\n");
        const bansEmbed = new Discord.MessageEmbed()
        .setAuthor(`Bans for ${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
        .setDescription(`${bannedMembers}`)
        .setFooter(`Amount: ${amount - 1}`)
        .setTimestamp()
        .setColor("RED")
        message.channel.send(bansEmbed)
    },
};