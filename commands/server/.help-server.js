const Discord = require("discord.js")
const cBase = require('../command-base')

module.exports = {
    commands: ['help-server'],
    expectedArgs: 'help-server',
    minArgs: 0,
    callback: (message, arguments, text, client) => {

        const prefix = cBase.prefix

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Server Help Commands__**')
        .setColor('RANDOM')
        .setFooter(`${message.author.username}`)
        .setThumbnail('https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png')
        .setDescription(`[Support Server](https://discord.gg/SbNs7CexP6) **|** [Invite](https://discord.com/api/oauth2/authorize?client_id=814913860900749333&permissions=8&scope=bot) **|** [Website](https://limitless-d1eafe.webflow.io/)\n**${prefix}report** (Reports a problem to developers) \n\n**The following commands will show you the bots server commands:**`)
        .addFields({
        name: `**${prefix}botinfo**`,
        value: `Gives you information about the bot and invite links`,
        inline: false
    },
    {
        name: `**${prefix}serverinfo**`,
        value: `Gives you info about your server`,
        inline: false
    },
    {
        name: `**${prefix}membercount**`,
        value: `Gives you the member count if the server`,
        inline: false
    },
    {
        name: `**${prefix}servers**`,
        value: `Shows the servers the bot is in, WILL CLOG UP/SPAM A CHANNEL`,
        inline: false
    },
    {
        name: `${prefix}rename <Channel\'s new name>`,
        value: `This will rename the channel the command is done in, **NEED PERMISSION:** \`MANAGE_CHANNELS\``,
        inline: false
    },
    {
        name: `${prefix}topic <Channel\'s new topic>`,
        value: `This will change the channel topic the command is done in, **NEED PERMISSION:** \`MANAGE_CHANNELS\``,
        inline: false
    },
    {
        name: `**${prefix}userinfo @user**`,
        value: `Shows you info on that user`,
        inline: false
  
    })

        message.channel.send(embed)

    }}