const Discord = require("discord.js")
const modLogsSchema = require('../../schemas/mod-logs-schema')

module.exports = {
  commands: ['deletechannel', 'delchannel'],
  maxArgs: 0,
  permissionError: 'You don\'t have the required permissions.',
  expectedArgs: 'deletechannel',
  permissions: 'MANAGE_CHANNELS',
  callback: async (message, arguments, text) => {

    const { guild } = message

        c = await modLogsSchema.findOne({
            _id: guild.id
          })
      
          const channelId = c.channelId
      
          const channel = await message.guild.channels.cache.get(channelId)

          let embed2 = new Discord.MessageEmbed()
          .setTitle("**__Channel Deletion Log__**")
          .setColor('RANDOM')
          .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
          .setTimestamp()
          .setDescription(`Name of Channel Deleted: ${message.channel.name}\n\nModerator: <@${message.author.id}>`)

          channel.send(embed2)
.catch((error) => {
  console.error(error);
});

    message.channel.delete()
  },
}
