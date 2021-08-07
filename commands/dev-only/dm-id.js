const Discord = require("discord.js")
const cBase = require('../command-base')

module.exports = {
    commands: 'dm-id',
    expectedArgs: 'dm-id <user id> <message>',
    minArgs: 1,
    maxArgs: null,
    callback: (message, arguments, text) => {

        client = message.client

        const prefix = cBase.prefix

       
        
        const member = message.member

        const developers = ['339286973212655616', '801246400338984961']

        if(developers.includes(message.author.id)) { 

     

            const userid = message.content.split(' ')[1]
            const dmcontent = message.content.split(' ').slice(2).join(' ');

            client.users.fetch(userid).then((user) => {

        
          

            user.send(dmcontent)

            message.reply('I have sent the user a dm')

            const channel = client.channels.cache.get('857501675673092136')

            let embed = new Discord.MessageEmbed()
            .setTitle('New DM Sent')
            .setColor('RANDOM')
            .setDescription(`**User:** ${user}\n\n**Content:** ${dmcontent}\n\n**Sent By:** ${message.author}`)

            channel.send(embed)

        })

        }}}