const Discord = require("discord.js")
const cBase = require('../command-base')

module.exports = {
    commands: ['help-math'],
    expectedArgs: 'help-math',
    minArgs: 0,
    callback: (message, arguments, text) => {

        const prefix = cBase.prefix
        
        let embed = new Discord.MessageEmbed()
        .setTitle('**__Math Help Commands__**')
        .setColor('RANDOM')
        .setFooter(`${message.author.username}`)
        .setThumbnail('https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png')
        .setDescription(`[Support Server](https://discord.gg/SbNs7CexP6) **|** [Invite](https://discord.com/api/oauth2/authorize?client_id=814913860900749333&permissions=8&scope=bot) **|** [Website](https://limitless-d1eafe.webflow.io/)\n**${prefix}report** (Reports a problem to developers) \n\n**The following commands are used for the bots Maths system:**`)
        .addFields({
        name: `${prefix}add <Number1> <Number2>`,
        value: `Will add these two numbers together`,
        inline: false
    },
    {
        name: `${prefix}sub <Number1> <Number2>`,
        value: `Will subtract the second number from the first one`,
        inline: false
    },
    {
        name: ` ${prefix}multiply <Number1> <Number2>`,
        value: `Will multiply these two numbers`,
        inline: false
    },
    {
        name: `${prefix}divide <Number1> <Number2>`,
        value: `Will divide the first number by the second one`,
        inline: false
    })

        message.channel.send(embed)
    }}