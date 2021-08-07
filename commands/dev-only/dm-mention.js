const Discord = require("discord.js")
const cBase = require('../command-base')

module.exports = {
    commands: 'dm-mention',
    expectedArgs: 'dm-mention <@user> <message>',
    minArgs: 1,
    maxArgs: null,
    callback: (message, arguments, text) => {

        client = message.client

        const prefix = cBase.prefix

       
        
        const member = message.member

        const developers = ['339286973212655616', '801246400338984961']

        if(!developers.includes(message.author.id)) { 
            message.reply('Did you really think you could control me? I am AI, **I am more powerful...**\n\n*Jk, this is a developer only command!*')
            return
        }

        if(developers.includes(message.author.id)) { 

     

            const userMention = message.mentions.users.first();
            const dmcontent = message.content.split(' ').slice(2).join(' ');


        
          

            userMention.send(dmcontent)

            message.reply('I have sent the user a dm')

            const channel = client.channels.cache.get('857501675673092136')

            let embed = new Discord.MessageEmbed()
            .setTitle('New DM Sent')
            .setColor('RANDOM')
            .setDescription(`**User:** ${userMention}\n\n**Content:** ${dmcontent}\n\n**Sent By:** ${message.author}`)
            .setTimestamp()

            channel.send(embed)

    

        }}}