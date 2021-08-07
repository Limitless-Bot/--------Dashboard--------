const Discord = require("discord.js")
const cBase = require('../command-base')
const modLogsSchema = require('../../schemas/mod-logs-schema')

module.exports = {
      commands: ['kick'],
      permissionError: "You thought you could be a sneaky boi, guess you are not important enough for this command",
      expectedArgs: 'kick <@mention user> [reason]',
      minArgs: 1,
      maxArgs: null,
      permissions: 'KICK_MEMBERS',
      callback: async (message, arguments, text) => {

        if (!message.mentions) {
          Return
          }
    
        const prefix = cBase.prefix
          
        const {
          guild
        } = message
        const authorID = message.author.id
        const time = message.createdTimestamp
        const now = new Date(Date.now())
        const user = message.mentions.users.first();
        if(!user) return message.channel.send("You need to @ mention a user!")
        const userid = message.mentions.users.first().id

        const r = message.content.replace(`${prefix}kick `, '')
        const reason = r.replace(`${user} `, '')

        const embed = new Discord.MessageEmbed()
          .setTitle(`**__Kick Moderation Log__**`)
          .setColor('#00ffff')
          .setThumbnail('https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png')
          .setDescription(`\n**Offender:**\n${user}\n\n**Username:**\n${user.tag}\n\n**User ID:**\n${userid}\n\n**Command:**\n${reason}\n\n**Server:**\n${guild.name}\n\n**Date:**\n${now.toLocaleDateString()}\nTime: ${now.toLocaleTimeString()}\n\n**Moderator:**\n<@${authorID}>`)
        if (user) {
          const member = message.guild.members.resolve(user);
          if (member) {
            if (message.author.id === member.user.id) return message.channel.send(`<@${authorID}> Are you ok? Did you really just try to kick yourself...`);

            if (!member.kickable) return message.channel.send(`<@${authorID}>  I was unable to kick the member`)
            const embed3 = new Discord.MessageEmbed()
            .setTitle('Kick Log')
            .setColor('RANDOM')
            .setDescription(`Hello ${user}, you were kicked from **${guild}** for:\n **${reason}**.`)
            .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
            .setTimestamp()
            user.send(embed3)
            member.kick({
              reason: `User was kicked from server, Reason: ${reason}`
            })


            c = await modLogsSchema.findOne({
              _id: guild.id
            })

            if (c) {

            const channelId = c.channelId

            const channel = await message.guild.channels.cache.get(channelId)

            message.channel.send(`<@${authorID}> I kicked ${user}, the details can be found in <#${channel.id}>`)
            channel.send(embed)
              .catch((error) => {
                console.error(error);
              });
            }
          } else {
            message.channel.send(`<@${authorID}> That user isn't in this guild!`);
          }
        } else {
          message.channel.send(`<@${authorID}> You didn't mention the user to kick!`);
        }

}}