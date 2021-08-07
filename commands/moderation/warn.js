const Discord = require('discord.js')
const warnSchema = require('../../schemas/warn-schema')
const modLogsSchema = require('../../schemas/mod-logs-schema')

module.exports = {
    commands: 'warn',
    minArgs: 2,
    expectedArgs: "warn <Target user's @> <reason>",
    permissions: 'KICK_MEMBERS',
    permissionError: 'You don\'t have the required permissions.',
    callback: async (message, arguments) => {

        const user = message.mentions.users.first()
        if(!user) return message.channel.send("You need to @ mention a user!")
        const userId = user.id
        const staff = message.author
        const staffId = message.author.id
        const staffTag = message.author.tag
        const guild = message.guild.name
        const guildId = message.guild.id
        const time = new Date
        const timestamp = time.getTime()
        
        arguments.shift()
        const reason = arguments.join(' ')

        const result = await warnSchema.find({
            guildId,
            userId
        })

        let lastId = result[result.length - 1]
        if (!lastId) {
            lastId = {
            id: 0
            }
        }

        await new warnSchema(
            {
                id: parseFloat(lastId.id) + 1,
                guildId,
                userId, 
                reason,
                timestamp,
                staffId,
                staffTag,
            }).save()
        

        const embed = new Discord.MessageEmbed()
        .setTitle('Limitless')
        .setDescription(`Warned ${user}`)

        message.channel.send(embed)

      

        const embed3 = new Discord.MessageEmbed()
        .setTitle('Warn Log')
        .setColor('RANDOM')
        .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
        .setDescription(`Hello ${user}, you were warned in **${guild}** for:\n **${reason}**.`)
        .setTimestamp()

        user.send(embed3)

        
        c = await modLogsSchema.findOne({
            _id: guildId
          })

          if (c) {
      
          const channelId = c.channelId
      
          const channel = await message.guild.channels.cache.get(channelId)

          const embed2 = new Discord.MessageEmbed()
          .setTitle('Warn Log')
          .setColor('RANDOM')
          .setDescription(`**User Warned:** ${user}\n\n**Reason:** ${reason}\n\n**Staff Member:** ${staff}\n\n**Server:** ${guild}`)
          .setTimestamp()

          channel.send(embed2)
    
          .catch((error) => {
            console.error(error);
        });
    }
}}