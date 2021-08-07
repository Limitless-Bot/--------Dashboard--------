const { MessageEmbed } = require('discord.js');


module.exports = {
    commands: ['leave-guild'],
    minArgs: 1,
    maxArgs: null,
    expectedArgs: 'leave-guild <guild ID>',
    callback: async (message, args, text, client) => {
  
        const developers = ['339286973212655616', '801246400338984961']

        if(!developers.includes(message.author.id)) { 
            message.reply('Did you really think you could control me? I am AI, **I am more powerful...**\n\n*Jk, this is a developer only command!*')
            return
        }


       if(developers.includes(message.author.id)) { 

        let guild = message.client.guilds.cache.get(args[0]);

        if(!guild) return message.channel.send('`❌ | You must provide me with a guild id that I am already in!`')

        guild.leave()

        const embed = new MessageEmbed()
          .setColor('#2F3136')
          .setDescription(`✅ | I have left \`${guild.name}\``)

          await message.channel.send(embed)
    }
    
}}