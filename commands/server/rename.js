const Discord = require("discord.js")
const cBase = require('../command-base')
const modLogsSchema = require('../../schemas/mod-logs-schema')

module.exports = {
    commands: ['rename'],
    permissionError: "You need to be able to manage channels for this command!",
    expectedArgs: 'rename <channels new name>',
    minArgs: 1,
    maxArgs: null,
    permissions: 'MANAGE_CHANNELS',
    callback: async (message, arguments, text) => {

      const prefix = cBase.prefix

        const namechannel = message.content.replace(`${prefix}rename `, '')

        const { guild } = message
        const { name } = guild
        const icon = guild.iconURL()
        const authorID = message.author.id
 
        const currentname = message.channel.name

        c = await modLogsSchema.findOne({
            _id: guild.id
          })
      
          const channelId = c.channelId
      
          const channel = await message.guild.channels.cache.get(channelId)



        message.channel.setName(namechannel)

        let embed = new Discord.MessageEmbed()
        .setTitle('Renamed Channel!')
        .setDescription(`Channel name has been changed!\n\n Old Name: **${currentname}**\n\nNew Name: **${namechannel}**\n\nPerformed By: **<@${authorID}>**`)
        .setThumbnail(icon)
        .setFooter('Powered by Limitless')
        .setColor('RANDOM')

        message.channel.send(embed)

        let embed2 = new Discord.MessageEmbed()
                .setTitle("**__Channel Rename Log__**")
                .setColor('RANDOM')
                .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
                .setTimestamp()
                .setDescription(`Old Name: ${currentname}\n\nNew Name: ${namechannel}\n\nModerator: <@${message.author.id}>`)

                channel.send(embed2)
      .catch((error) => {
        console.error(error);
      });


    }}