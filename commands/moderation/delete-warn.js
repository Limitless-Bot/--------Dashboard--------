const warnSchema = require('../../schemas/warn-schema')
const modLogsSchema = require('../../schemas/mod-logs-schema')
const Discord = require("discord.js")

module.exports = {
    commands: ['delete-warning', 'delete-warn'],
    minArgs: 2,
    maxArgs: 2,
    expectedArgs: "delete-warn <Target user's @> <warn ID>",
    permissionError: 'You don\'t have the required permissions.',
    permissions: 'ADMINISTRATOR',
    callback: async (message, arguments, text) => {

        const {
            guild
          } = message

        const guildId = message.guild.id
        const user = message.mentions.users.first()
        if (!user) {
            message.reply('Please specify @mention a user.')
            return
        }
        const userId = message.mentions.users.first().id
        const id = arguments[1]

        if (isNaN(id)) {
            message.channel.send('Please say a number!')
            return
        }

        const result = await warnSchema.findOne({
            guildId,
            userId,
            id,
        })

        await warnSchema.findOneAndDelete({
            guildId,
            userId,
            id,
        },
        {
            guildId,
            userId,
            id,
        })

        let embed2 = new Discord.MessageEmbed()
        .setTitle('Deleted Warning')
        .setColor('RANDOM')
        .setDescription(`I have removed warning ID: **${id}** for the user: **${user}**`)
        message.channel.send(embed2)

        c = await modLogsSchema.findOne({
            _id: guild.id
          })

          if (c) {
      
          const channelId = c.channelId
      
          const channel = await message.guild.channels.cache.get(channelId)

          let embed3 = new Discord.MessageEmbed()
                .setTitle("**__Delete-Warn Log__**")
                .setColor('RANDOM')
                .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
                .setTimestamp()
                .addFields(
                {
                    name: `User Warning Was Deleted For:`,
                    value: user
                },
                {
                    name: `Warn ID Number:`,
                    value: id
                },
                {
                    name: `Warning:`,
                    value: result.reason

                },
                {
                    name: `Performed By:`,
                    value: message.author
                })

                channel.send(embed3)


        .catch((error) => {
        console.error(error);
    });
}

        
    
}};