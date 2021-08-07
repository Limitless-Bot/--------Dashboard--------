const Discord = require("discord.js")
const modLogsSchema = require('../../schemas/mod-logs-schema')

module.exports = {
    commands: ['purge'],
    permissionError: "You need to be able to manage messages for this command!",
    expectedArgs: 'purge <number of messages>',
    minArgs: 1,
    maxArgs: null,
    permissions: 'MANAGE_MESSAGES',
    callback: async (message, arguments, text) => {
        
        const { guild } = message


        c = await modLogsSchema.findOne({
            _id: guild.id
          }) 


        if (!c) {
            const amount = parseInt(arguments[0]) + 1;

        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
        } else if (amount <= 1 || amount > 100) {
            return message.reply('you need to input a number between 1 and 99.');
        }

        message.channel.bulkDelete(amount, true).then(deletedMessages => {
            var botMessages = deletedMessages.filter(m => m.author.bot);
            var userPins = deletedMessages.filter(m => m.pinned);
            var userMessages = deletedMessages.filter(m => !m.author.bot);

            const embed = new Discord.MessageEmbed()
                .setTitle("Successfuly Purged")
                .setColor('RANDOM')
                .setFooter(`Purged by: ${message.author.username}`)
                .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
                .setTimestamp()
                .addField("Bot Messages Purged", botMessages.size, false)
                .addField("User Pins Purged", userPins.size, false)
                .addField("User Messages Purged", userMessages.size, false)
                .addField("Total Messages Purged", deletedMessages.size, false);

            message.channel.send(embed);
            
        }).catch(err => {
            console.error(err);
            message.channel.send('there was an error trying to prune messages in this channel!');
       
        })
        }

      
        if (c) {
          const channelId = c.channelId
        
          const channel = await message.guild.channels.cache.get(channelId)

        const amount = parseInt(arguments[0]) + 1;

        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
        } else if (amount <= 1 || amount > 100) {
            return message.reply('you need to input a number between 1 and 99.');
        }

        message.channel.bulkDelete(amount, true).then(deletedMessages => {
            var botMessages = deletedMessages.filter(m => m.author.bot);
            var userPins = deletedMessages.filter(m => m.pinned);
            var userMessages = deletedMessages.filter(m => !m.author.bot);

            const embed2 = new Discord.MessageEmbed()
            .setTitle("__**Purge Log**__")
            .setColor('RANDOM')
            .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
            .setTimestamp()
            .addField("Bot Messages Purged", botMessages.size, false)
            .addField("User Pins Purged", userPins.size, false)
            .addField("User Messages Purged", userMessages.size, false)
            .addField("Total Messages Purged", deletedMessages.size, false)
            .addField("Channel Purged:", message.channel, false)
            .addField("Purged By:", message.author, false);

            channel.send(embed2)
            .catch((error) => {
              console.error(error);
            });
        

            const embed = new Discord.MessageEmbed()
                .setTitle("Successfuly Purged")
                .setColor('RANDOM')
                .setFooter(`Purged by: ${message.author.username}`)
                .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
                .setTimestamp()
                .addField("Bot Messages Purged", botMessages.size, false)
                .addField("User Pins Purged", userPins.size, false)
                .addField("User Messages Purged", userMessages.size, false)
                .addField("Total Messages Purged", deletedMessages.size, false);

            message.channel.send(embed);
            
        }).catch(err => {
            console.error(err);
            message.channel.send('there was an error trying to prune messages in this channel!');
       
        })
    }


        
        setTimeout(() => {
            message.channel.bulkDelete(1)
        }, 1000 * 5)
    

  
            },
};