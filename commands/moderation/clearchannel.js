const Discord = require("discord.js")
const modLogsSchema = require('../../schemas/mod-logs-schema')


module.exports = {
      commands: ['cc', 'clearchannel'],
      expectedArgs: 'cc',
      minArgs: 0,
      maxArgs: 0,
      permissionError: 'You don\'t have the required permissions.',
      permissions: 'MANAGE_MESSAGES',
      callback: async (message, arguments, text) => {
        const { guild } = message

            message.channel.messages.fetch().then( async (results) => {
                message.channel.bulkDelete(results)

                c = await modLogsSchema.findOne({
                    _id: guild.id
                  })

                  if (c) {
              
                  const channelId = c.channelId
              
                  const channel = await message.guild.channels.cache.get(channelId)


                let embed2 = new Discord.MessageEmbed()
                .setTitle("**__Clear Channel Log__**")
                .setColor('RANDOM')
                .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
                .setTimestamp()
                .setDescription(`Channel that was cleared: <#${message.channel.id}>\n\nModerator: <@${message.author.id}>`)

                channel.send(embed2)
      .catch((error) => {
        console.error(error);
      });
    }
            })
        }
    }