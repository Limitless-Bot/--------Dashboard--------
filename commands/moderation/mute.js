const Discord = require("discord.js")
const muteSchema = require('../../schemas/mute-schema')
const modLogsSchema = require('../../schemas/mod-logs-schema')

module.exports = {
    commands: ['mute'],
    permissionError: "You need the permission `MUTE_MEMBERS`",
    expectedArgs: 'mute <@person> <time> <reason>',
    minArgs: 3,
    maxArgs: null,
    permissions: 'MUTE_MEMBERS',
    callback: async (message, arguments, text) => {

        
        const { guild, author: staff } = message

        const guildId = guild.id
        const userId = message.mentions.users.first().id

        const lengthT = arguments[1].toLowerCase()
        
        arguments.shift()
        arguments.shift()

        const reason = arguments.join(' ')


        const target = message.mentions.users.first()
        if (!target) {
            message.reply(`Please specify someone to mute.`)
            return
        }

        let time_length
        let unit = ''

        if (lengthT.includes('s')) {
            time_length = lengthT.split("s")[0]
            unit = 's'
        }

        if (lengthT.includes('m')) {
            time_length = lengthT.split("m")[0]
            unit = 'm'
        }

        if (lengthT.includes('h')) {
            time_length = lengthT.split("h")[0]
            unit = 'h'
        }

        if (lengthT.includes('d')) {
            time_length = lengthT.split("d")[0]
            unit = 'd'
        }
        
        time_length = parseFloat(time_length)
        let date = new Date()

        if (unit.includes('s')) {
            date.setSeconds(date.getSeconds() + time_length)
        }

        if (unit.includes('m')) {
            date.setMinutes(date.getMinutes() + time_length)
        }

        if (unit.includes('h')) {
            date.setHours(date.getHours() + time_length)
        }

        if (unit.includes('d')) {
            date.setHours(date.getHours() + time_length * 24)
        }


        const previousMutes = await muteSchema.find({
            guildId,
            userId: target.id
        })

        const currentlyMuted = previousMutes.filter(mute => {
            return mute.current === true
        })

        if (currentlyMuted.length) {
            message.reply('That user is already muted')
            return
        }

        await muteSchema.findOneAndUpdate({
            guildId,
            userId,
        },
        {
            guildId,
            userId,
            reason,
            staffId: staff.id,
            staffTag: staff.tag,
            expires: date,
            current: true
        },
        {
            upsert: true,
        })


        const mutedRole = guild.roles.cache.find(role => {
            return role.name === 'Muted'
        })
        if (!mutedRole) {
            message.reply('Could not find a `Muted` role')
            return
        }

        const targetMember = (await guild.members.fetch(target.id))
        targetMember.roles.add(mutedRole)



        let embed = new Discord.MessageEmbed()
        .setColor(0x00AE86)
        .addFields(
            {
                name: 'Muted:',
                value: target,
                inline: false
            },
            {
                name: 'Muted for:',
                value: lengthT,
                inline: false
            },
            {
                name: 'Reason:',
                value: reason,
                inline: false
            }
        )

        message.channel.send(embed)

        const embed3 = new Discord.MessageEmbed()
        .setTitle('Mute Log')
        .setColor('RANDOM')
        .setDescription(`Hello ${target}, you were muted in **${guild}** for:\n **${reason}**\nYou will be unmuted in: **${lengthT}.**`)
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
        target.send(embed3)
	

            // MOD LOGS

        c = await modLogsSchema.findOne({
            _id: guild.id
          })

          if (c) {
      
          const channelId = c.channelId
      
          const channel = await message.guild.channels.cache.get(channelId)

          let embed2 = new Discord.MessageEmbed()
          .setTitle("**__Mute Log__**")
          .setColor('RANDOM')
          .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
          .setTimestamp()
          .setDescription(message.guild.name)
          .addFields(
              {
                  name: 'Muted:',
                  value: target,
                  inline: false
              },
              {
                  name: 'Muted for:',
                  value: lengthT,
                  inline: false
              },
              {
                  name: 'Reason:',
                  value: reason,
                  inline: false
              },
              {
                  name: 'Moderator:',
                  value: message.author,
                  inline: false
              }
          )

          channel.send(embed2)

        

.catch((error) => {
  console.error(error);
});
          }
	},
}