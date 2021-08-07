const Discord = require("discord.js")
const cBase = require('../command-base')
const modLogsSchema = require('../../schemas/mod-logs-schema')

module.exports = {
    commands: ['topic'],
    permissionError: "You need to be able to manage channels for this command!",
    expectedArgs: 'topic <new topic for current channel>',
    minArgs: 1,
    maxArgs: null,
    permissions: 'MANAGE_CHANNELS',
    callback: async (message, arguments, text) => {

      const prefix = cBase.prefix

        const { guild } = message

        c = await modLogsSchema.findOne({
            _id: guild.id
          })
      
          const channelId = c.channelId
      
          const channel = await message.guild.channels.cache.get(channelId)

        const topicnew = message.content.replace(`${prefix}topic `, '')

        
        const { name } = guild
        const icon = guild.iconURL()
        const authorID = message.author.id
 
        const oldtopic = message.channel.topic


        message.channel.setTopic(topicnew)


        let embed = new Discord.MessageEmbed()
        .setTitle('Set Topic Of Channel!')
        .setDescription(`Channel topic has been changed!\n\n Old Topic: **${oldtopic}**\n\nNew Topic: **${topicnew}**\n\nPerformed By: **<@${authorID}>**`)
        .setThumbnail(icon)
        .setFooter('Powered by Limitless')
        .setColor('RANDOM')

        message.channel.send(embed)

        let embed2 = new Discord.MessageEmbed()
                .setTitle("**__Channel Topic Log__**")
                .setColor('RANDOM')
                .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
                .setTimestamp()
                .setDescription(`Old Channel Topic: ${oldtopic}\n\nNew Channel Topic: ${topicnew}\n\nChannel: ${message.channel}\n\nModerator: <@${message.author.id}>`)

                channel.send(embed2)
      .catch((error) => {
        console.error(error);
      });


    }}