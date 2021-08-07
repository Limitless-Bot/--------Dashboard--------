const Discord = require("discord.js")
const cBase = require('../command-base')

module.exports = {
    commands: ['help-economy'],
    expectedArgs: 'help-economy',
    minArgs: 0,
    callback: (message, arguments, text) => {

        const prefix = cBase.prefix
        
        let embed = new Discord.MessageEmbed()
        .setTitle('**__Economy Help Commands__**')
        .setColor('RANDOM')
        .setFooter(`${message.author.username}`)
        .setThumbnail('https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png')
        .setDescription(`[Support Server](https://discord.gg/SbNs7CexP6) **|** [Invite](https://discord.com/api/oauth2/authorize?client_id=814913860900749333&permissions=8&scope=bot) **|** [Website](https://limitless-d1eafe.webflow.io/)\n**${prefix}report** (Reports a problem to developers) \n\n**The following commands are used for the economy system:**`)
        .addFields({
            name: `${prefix}addbalance <@user> <amount>`,
            value: `(This adds money to that user, **PERMISSION: \`ADMINISTRATOR\`**)`,
            inline: false
        },
        {
            name: `${prefix}bal <@user>`,
            value: `(Gives you the amount of money they have)`,
            inline: false
        },
        {
            name: `${prefix}pay <@user> <amount>`,
            value: `(Allows you to pay some of your money to another user)`,
            inline: false
        })

        message.channel.send(embed)
    }}