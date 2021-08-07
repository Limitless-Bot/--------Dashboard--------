const Discord = require("discord.js")

module.exports = {
      commands: ['server', 'serverinfo'],
      expectedArgs: '',
      permissionError: 'You do not have permission to run this command.',
      minArgs: 0,
      maxArgs: 0,
      expectedArgs: 'serverinfo',
      permissions: [],
      requiredRoles: [],
      callback: (message, arguments, text) => {
        const { guild } = message

        const { name, region, memberCount, owner, afkTimeout} = guild
        const icon = guild.iconURL()

        const embed = new Discord.MessageEmbed()
        .setTitle(`Server info for "${name}"`)
        .setThumbnail(icon)
        .setColor('RANDOM')
        .addFields({
            name: 'Region',
            value: region,
        },
        {
            name: 'Members',
            value: memberCount,
        },
        {
            name: 'Owner',
            value: owner.user.tag,
        },
        {
            name: 'AFK Timeout',
            value: afkTimeout / 60,
        })


        message.channel.send(embed)
      }}