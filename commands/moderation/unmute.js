const Discord = require("discord.js")
const muteSchema = require('../../schemas/mute-schema')
const modLogsSchema = require('../../schemas/mod-logs-schema')

module.exports = {
    commands: ['unmute'],
    permissionError: "You need the permission `MUTE_MEMBERS`",
    expectedArgs: 'unmute <@person or target users ID>',
    minArgs: 1,
    maxArgs: 1,
    permissions: 'MUTE_MEMBERS',
    callback: async (message, arguments, text) => {
        const { guild } = message

     

        
        
        let id = ''
       
        const target = message.mentions.users.first()
        if(!target) return message.channel.send("You need to @ mention a user!")
        if (target) {
            id = target.id
        } else {
            id = arguments[0]
        }

        const result = await muteSchema.updateOne({
            guildId: guild.id,
            userId: id,
            current: true
        }, {
            current: false
        })


        if (result.nModified === 1) {
            const mutedRole = guild.roles.cache.find(role => {
                return role.name === 'Muted'
            })

            if (mutedRole) {
                const guildMember = guild.members.cache.get(id)
                guildMember.roles.remove(mutedRole)
            }

            let embed = new Discord.MessageEmbed()
            .setTitle("Limitless")
            .setColor('RANDOM')
            .setFooter(`Unmuted by: ${message.author.username}`)
            .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
            .setTimestamp()
            .setDescription(`You unmuted <@${id}>`)

            message.channel.send(embed)
        } else {
            message.reply(`That user is not muted`)
        }

        const embed3 = new Discord.MessageEmbed()
        .setTitle('Unmute Log')
        .setColor('RANDOM')
        .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
        .setDescription(`Hello ${target}, you were unmuted in **${guild}**`)
        .setTimestamp()

        target.send(embed3)

        c = await modLogsSchema.findOne({
            _id: guild.id
          })

          if (c) {
      
          const channelId = c.channelId
      
          const channel = await message.guild.channels.cache.get(channelId)

        let embed2 = new Discord.MessageEmbed()
                .setTitle("**__Unmute Log__**")
                .setColor('RANDOM')
                .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
                .setTimestamp()
                .setDescription(`User that was unmuted: <@${id}>\n\nModerator: <@${message.author.id}>`)

                channel.send(embed2)
      .catch((error) => {
        console.error(error);
      });
    }

}}
