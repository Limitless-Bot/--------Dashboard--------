const Discord = require("discord.js")
const cBase = require('../command-base')

module.exports = {
    commands: ['help-code'],
    expectedArgs: 'help-code',
    minArgs: 0,
    callback: (message, arguments, text) => {

        const prefix = cBase.prefix

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Code Help Commands__**')
        .setColor('RANDOM')
        .setFooter(`${message.author.username}`)
        .setThumbnail('https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png')
        .setDescription(`[Support Server](https://discord.gg/SbNs7CexP6) **|** [Invite](https://discord.com/api/oauth2/authorize?client_id=814913860900749333&permissions=8&scope=bot) **|** [Website](https://limitless-d1eafe.webflow.io/)\n**${prefix}report** (Reports a problem to developers) \n\n**The following are the bots misc commands:**`)
        .addFields({

        name: `${prefix}code-bin`,
        value: "Will give you an online code bin link",
        inline: false
        
        },
        {
            name: `${prefix}hex-colour <hex colour>`,
        value: "Gives you info on the hex colour and shows you a sample of it",
        inline: false
        
        },
        {
            name: `${prefix}docs <Documentation your looking up>`,
        value: "Gives you information and the official link to the JS docs relating to that",
        inline: false

    })

    message.channel.send(embed)
}}