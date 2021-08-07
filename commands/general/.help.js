const Discord = require("discord.js")
const cBase = require('../../commands/command-base')

module.exports = {
    commands: ['help'],
    description: "Describes all of this bot's commands",
    expectedArgs: 'help',
    minArgs: 0,
    expectedArgs: 'help',
    callback: (message, arguments, text) => {

        const prefix = cBase.prefix

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Limitless Help Menu__**')
        .setColor('RANDOM')
        .setFooter(`${message.author.username}`) 
        .setDescription(`[Support Server](https://discord.gg/SbNs7CexP6) **|** [Invite](https://discord.com/api/oauth2/authorize?client_id=814913860900749333&permissions=8&scope=bot) **|** [Website](https://limitless-d1eafe.webflow.io/)\n**${prefix}report** (Reports a problem to developers)\n**${prefix}suggest <suggestion>** (Sends your suggestion directly to the bot devs)\n\n**This is the help module, type the following commands to get all the commands within that module and how to use them:**` )
        .setThumbnail('https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png')
        .addFields({
            name: `${prefix}help-animal`,
            value: `All things to do with animal pictures`,
            inline: false
        },
        {
            name: `${prefix}help-games`,
            value: `All things to do with games`,
            inline: false
        },
        {
            name: `${prefix}help-economy`,
            value: `Will show the eocnomy commands`,
            inline: false
        },
        {
            name: `${prefix}help-math`,
            value: `Will show all the Maths Commands`,
            inline: false
        },
        {
            name: `${prefix}help-misc`,
            value: `Will display all the misc commands`,
            inline: false
        },
        {
            name: `${prefix}help-moderation`,
            value: `Will show all the moderation commands and how to use them`,
            inline: false
        },
        {
            name: `${prefix}help-server`,
            value: `Will show all the server commands`,
            inline: false
        },
        {
            name: `${prefix}help-shifts`,
            value: `Will show the commands for the shift-tracker system`,
            inline: false
        },
        {
            name: `${prefix}help-suggestions`,
            value: `Will show the commands for the suggestions system`,
            inline: false
        },
        {
            name: `${prefix}help-utility`,
            value: `Will show all the bots utility commands`,
            inline: false
        },
        {
            name: `${prefix}help-music`,
            value: `Will show all the bots music commands`,
            inline: false
        },
        {
            name: `${prefix}help-food-drink`,
            value: `(Will show all the bots food and drink commands`,
            inline: false
        },
        )

        message.channel.send(embed)
    }}