const Discord = require("discord.js")
const cBase = require('../command-base')

module.exports = {
    commands: ['help-animal', 'help-animals'],
    minArgs: 0,
    callback: (message, arguments, text) => {

        const prefix = cBase.prefix

        const p = `Shows a picture of a`
        
        let embed = new Discord.MessageEmbed()
        .setTitle('**__Animal Help Commands__**')
        .setColor('RANDOM')
        .setFooter(`${message.author.username}`)
        .setThumbnail('https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png')
        .setDescription(`[Support Server](https://discord.gg/SbNs7CexP6) **|** [Invite](https://discord.com/api/oauth2/authorize?client_id=814913860900749333&permissions=8&scope=bot) **|** [Website](https://limitless-d1eafe.webflow.io/)\n**${prefix}report** (Reports a problem to developers) \n\n**The following commands will show you a picture of that animal:**`)
        .addFields({
        name: `${prefix}cat`,
        value: `${p} cat`,
        inline: false
    },
    {
        name: `${prefix}chicken`,
        value: `${p} chicken`,
        inline: false
    },
    {
        name: `${prefix}cow`,
        value: `${p} cow`,
        inline: false
    },
    {
        name: `${prefix}dinosaur`,
        value: `${p} dinosaur`,
        inline: false
    },
    {
        name: `${prefix}dog`,
        value: `${p} dog`,
        inline: false
    },
    {
        name: `${prefix}duck`,
        value: `${p} duck`,
        inline: false
    },
    {
        name: `${prefix}fish`,
        value: `${p} fish`,
        inline: false
    },
    {
        name: `${prefix}frog`,
        value: `${p} frog`,
        inline: false
    },
    {
        name: `${prefix}gorilla`,
        value: `${p} gorilla`,
        inline: false
    },
    {
        name: `${prefix}hamster`,
        value: `${p} hamster`,
        inline: false
    },
    {
        name: `${prefix}lion`,
        value: `${p} lion`,
        inline: false
    },
    {
        name: `${prefix}monkey`,
        value: `${p} monkey`,
        inline: false
    },
    {
        name: `${prefix}pig`,
        value: `${p} pig`,
        inline: false
    },
    {
        name: `${prefix}potato`,
        value: `${p} potato`,
        inline: false
    },
    {
        name: `${prefix}rabbit`,
        value: `${p} rabbit`,
        inline: false
    },
    {
        name: `${prefix}rhino`,
        value: `${p} rhino`,
        inline: false
    },
    {
        name: `${prefix}snake`,
        value: `${p} snake`,
        inline: false
    },
    {
        name: `${prefix}swan`,
        value: `${p} swan`,
        inline: false
    })

        message.channel.send(embed)
    }}