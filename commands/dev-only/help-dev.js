const Discord = require("discord.js")
const cBase = require('../command-base')

module.exports = {
    commands: ['help-developer', 'help-dev'],
    expectedArgs: 'help-dev',
    minArgs: 0,
    callback: (message, arguments, text) => {

        const developers = ['339286973212655616', '801246400338984961']

        if(!developers.includes(message.author.id)) { 
            message.reply('Did you really think you could control me? I am AI, **I am more powerful...**\n\n*Jk, this is a developer only command!*')
            return
        }

        if(developers.includes(message.author.id)) { 

        const prefix = cBase.prefix
        
        let embed = new Discord.MessageEmbed()
        .setTitle('**__Developer Only Help Commands__**')
        .setColor('RANDOM')
        .setFooter(`${message.author.username}`)
        .setThumbnail('https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png')
        .setDescription(`[Support Server](https://discord.gg/SbNs7CexP6) **|** [Invite](https://discord.com/api/oauth2/authorize?client_id=814913860900749333&permissions=8&scope=bot) **|** [Website](https://limitless-d1eafe.webflow.io/) |**${prefix}report** (Reports a problem to developers) \n\n**The following commands are for developers only:**`)
        .addFields({

            name: `${prefix}leave-guild <guild ID>`,
            value: `Will make Limitless leave the mentioned guild.`,
            inline: false
        },
        {

            name: `${prefix}set-presence <presence>`,
            value: `Will set the presence in the bot\'s status`,
            inline: false
        },
        {
            name: `${prefix}pfp <image URL>`,
            value: `Will change the bot\'s profile picture within discord`,
            inline: false
        },
        {
            name: `${prefix}dm-id <user id> <message>`,
            value: `Dm\'s the mentioned user ID the mentioned message`,
            inline: false
        },
        {
            name: `${prefix}dm-id <@user> <message>`,
            value: `Dm\'s the mentioned user the mentioned message`,
            inline: false
        },
        {
            name: `${prefix}set-activity <activity> <presence>`,
            value: `Will set the activity and presence in the bot\'s status`,
            inline: false
        },
        {
            name: `${prefix}set-presence-guilds`,
            value: `Will set the activity and presence of the bot to the guilds, users and help status`,
            inline: false
        },
        {
            name: `${prefix}set-status <online/idle/dnd/invisible>`,
            value: `Will set the status of the bot`,
            inline: false
        },
        {
            name: `${prefix}servers`,
            value: `Shows all of the servers Limitless is in`,
            inline: false
        },
        {
            name: `${prefix}panic <reason>`,
            value: `Pings mental support for when a developer is having a breakdown`,
            inline: false

        })

        message.channel.send(embed)
        

        
    }}}