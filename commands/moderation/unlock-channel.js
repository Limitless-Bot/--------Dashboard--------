const Discord = require("discord.js")
const cBase = require('../command-base')
const modLogsSchema = require('../../schemas/mod-logs-schema')
const { MessageEmbed } = require("discord.js")


module.exports = {
      commands: ['unlock-channel'],
      permissionError: "You thought you could be a sneaky boi, guess you are not important enough for this command",
      expectedArgs: 'unlock-channel <#channel> [reason]',
      minArgs: 1,
      maxArgs: null,
      permissions: 'MANAGE_CHANNELS',
      callback: async (message, args, text) => {

        const { guild } = message

        let channel = message.mentions.channels.first();
        let reason = args.join(" ") || 'Not Specified'

        if(channel) {
            reason = args.join(" ").slice(22) || 'Not Specified'
        } else (
            channel = message.channel
        )

        if(channel.permissionsFor(message.guild.id).has('SEND_MESSAGES') === true) {
            const lockchannelError2 = new MessageEmbed()
            .setDescription(`${channel} is already unlocked!`)
            .setColor("RANDOM")

            return message.channel.send(lockchannelError2)
        }

        channel.updateOverwrite(message.guild.id, { SEND_MESSAGES: true })

        const embed = new MessageEmbed()
        .setTitle(`Channel Unlocked!`)
        .setDescription(`**Channel:** ${channel} \n **Reason:** ${reason}`)
        .setColor("RANDOM")
        .setTimestamp()

        message.channel.send(embed)

        c = await modLogsSchema.findOne({
            _id: guild.id
          })

          if (c) {
      
          const channelId = c.channelId
      
          const channel2 = await message.guild.channels.cache.get(channelId)

          const embed2 = new MessageEmbed()
          .setTitle(`Channel Unlocked Mod Log!`)
          .setDescription(`**Channel:** ${channel} \n **Reason:** ${reason}\n**Staff Member:** ${message.author}`)
          .setColor("RANDOM")
          .setTimestamp()

          channel2.send(embed2)

        

          .catch((error) => {
            console.error(error);
          });

    }
}}