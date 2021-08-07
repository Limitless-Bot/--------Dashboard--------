const Discord = require("discord.js")
const modLogsSchema = require('../../schemas/mod-logs-schema')

module.exports = {
    commands: 'nick',
    permissionError: "You need the permission `MANAGE_NICKNAMES`",
    expectedArgs: 'nick <@person> <nickname>',
    minArgs: 2,
    maxArgs: null,
    permissions: 'MANAGE_NICKNAMES',
    callback: async (message, arguments, text) => {
        const target = message.mentions.users.first()
        if(!target) return message.channel.send("You need to @ mention a user!")
        const member = message.guild.members.cache.get(target.id)
        const { guild } = message

        const oldNick = member.nickname

        arguments.shift()
        const nickname = arguments.join(' ')

        member.setNickname(nickname)

        setTimeout( async () => {


        const t = message.mentions.users.first()
        const m = message.guild.members.cache.get(t.id)
        const newNick = m.nickname

 

        message.delete()



        let embed = new Discord.MessageEmbed()
        .setTitle("Limitless")
        .setColor('RANDOM')
        .setFooter(`Changed by: ${message.author.username}`)
        .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
        .setTimestamp()
        .setDescription(`You have changed <@${target.id}> nickname to \`${nickname}\``)

        message.channel.send(embed)

        c = await modLogsSchema.findOne({
            _id: guild.id
          })

        if (c) {
      
          const channelId = c.channelId
      
          const channel = await message.guild.channels.cache.get(channelId)

        let embed2 = new Discord.MessageEmbed()
        .setTitle("**__Nickname Change Log__**")
        .setColor('RANDOM')
        .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
        .setTimestamp()
        .addFields({
          name: 'Old Nickname',
          value: oldNick,
        },
        {
          name: 'New Nickname',
          value: newNick,
        },
        {
          name: 'Moderator',
          value: message.author
        })
        channel.send(embed2)
      .catch((error) => {
        console.error(error);
      })
    }

               }, 1000)

}}