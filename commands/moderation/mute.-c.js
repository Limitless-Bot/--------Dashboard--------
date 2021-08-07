const Discord = require("discord.js")
const muteSchema = require('../../schemas/mute-schema')
const modLogsSchema = require('../../schemas/mod-logs-schema')

const reasons = {
    SWEARING: 1,
    RACISM: 2,
    SPAMMING: 5,
    ADVERTISING: 24
}

module.exports = {
    commands: ['mute-c'],
    permissionError: "You need the permission `MUTE_MEMBERS`",
    expectedArgs: '<@person> <reason>',
    minArgs: 2,
    maxArgs: null,
    permissions: 'MUTE_MEMBERS',
    callback: async (message, arguments, text) => {
        const { guild, author: staff } = message

        const target = message.mentions.users.first()
        if (!target) {
            message.reply(`Please specify someone to mute.`)
        }

        const reason = arguments[1].toUpperCase()
        if (!reasons[reason]) {
            let validReasons = ''
            for (const key in reasons) {
                validReasons += `${key}, `
            }
            validReasons = validReasons.substring(0, validReasons.length - 2)

            message.reply(`Unknown reason, please use one of the following: ${validReasons}`)
            return
        }

        const previousMutes = await muteSchema.find({
            userId: target.id
        })

        const currentlyMuted = previousMutes.filter(mute => {
            return mute.current === true
        })

        if (currentlyMuted.length) {
            message.reply('That user is already muted')
            return
        }

        let duration = reasons[reason]

        const expires = new Date()
        expires.setHours(expires.getHours() + duration)

        const mutedRole = guild.roles.cache.find(role => {
            return role.name === 'Muted'
        })
        if (!mutedRole) {
            message.reply('Could not find a `Muted` role')
            return
        }

        const targetMember = (await guild.members.fetch(target.id))
        targetMember.roles.add(mutedRole)

        await new muteSchema({
            userId: target.id,
            guildId: guild.id,
            reason,
            staffId: staff.id,
            staffTag: staff.tag,
            expires,
            current: true
        }).save()

        let embed = new Discord.MessageEmbed()
        .setTitle("Limitless")
        .setColor(0x00AE86)
        .setFooter(`Muted by: ${message.author.username}`)
        .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
        .setTimestamp()
        .setDescription(`You muted <@${target.id}> for **\`${reason}\`**. They will be unmuted in **\`${duration}\`** hours.`)

        message.channel.send(embed)


  

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
          .setDescription(`User that was muted: ${target}\n\nReason: ${reason}\n\nTime until unmute: ${duration} hours\n\nModerator: <@${message.author.id}>`)

          channel.send(embed2)
.catch((error) => {
  console.error(error);
});
          }

    },
}