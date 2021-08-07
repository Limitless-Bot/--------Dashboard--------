const Discord = require("discord.js")
const cBase = require('../command-base')

module.exports = {
    commands: ['help-moderation', 'help-mod'],
    expectedArgs: 'help-mod',
    minArgs: 0,
    callback: (message, arguments, text) => {

        const prefix = cBase.prefix

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Moderation Help Commands__**')
        .setFooter(`${message.author.username}`)
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png')
        .setDescription(`[Support Server](https://discord.gg/SbNs7CexP6) **|** [Invite](https://discord.com/api/oauth2/authorize?client_id=814913860900749333&permissions=8&scope=bot) **|** [Website](https://limitless-d1eafe.webflow.io/) |**${prefix}report** (Reports a problem to developers) \n\n**The following commands are the bots moderation commands:**`)
        .addFields({
            name: `${prefix}setup-moderation`,
            value: `**This command must be done before you do any kind of moderation**`,
            inline: false
            
        },
        {
            name: `${prefix}set-prefix <new prefix>`,
            value: `Will change the bot for that server, **NEED PERMISSION:** \`ADMINISTRATOR\``,
            inline: false

        },
        {
            name: `${prefix}nick @user <new nickname>`,
            value: `Will change the nickname of specified person`,
            inline: false

        },
        {
            name: `${prefix}lock-channel <#channel> [reason]`,
            value: `Will change the @everyone permission so it can't send messages`,
            inline: false

        },
        {
            name: `${prefix}unlock-channel <#channel> [reason]`,
            value: `Will change the @everyone permission so it can send messages`,
            inline: false

        },
        {
        name: `${prefix}set-mod-logs <#channel>`,
        value: `Will set your mod logs channel, **NEED PERMISSION:** \`KICK_MEMBERS\``,
        inline: false
            
        },
        {
        name: `${prefix}remove-mod-logs`,
        value: `Will your your mod logs channel, **NEED PERMISSION:** \`KICK_MEMBERS\``,
        inline: false
            
        },
        {
        name: `${prefix}kick <@user> <reason>`,
        value: `Will kick the mentioned user from the server, post a moderation log in the channel the command was done in and will send a copy of this moderation log to the kicked members dm's, **NEED PERMISSION:** \`KICK_MEMBERS\``,
        inline: false
    },
    {
        name: `${prefix}ban <@user> <reason>`,
        value: `This will ban the mentioned user from the server, will post a moderation log embed in the channel you do the command in and will send the banned user a copy of this moderation log in dm's, **NEED PERMISSION:** \`BAN_MEMBERS\``,
        inline: false
    },
    {
        name: `${prefix}server-bans`,
            value: `This will display all banned members in the server.`,
            inline: false
            
        },
        {
        
        name: `${prefix}clearchannel`,
        value: `Will bulk delete some messages, **NEED PERMISSION:** \`MANAGE_MESSAGES\``,
        inline: false
    },
    {
        name: `${prefix}mute @user <setreason> `,
        value: `Will mute user for the set time for set reasons: swearing = 1h, racism = 2h, spamming = 5h, advertising = 24h, **NEED PERMISSION:** \`MUTE_MEMBERS\``,
        inline: false
    },
    {
        name: `${prefix}unmute @user`,
        value: `Will unmute the mentioned user, **NEED PERMISSION:** \`MUTE_MEMBERS\``,
        inline: false
    },
    {
        name: `${prefix}checkmute @user`,
        value: `Will check if the mentioned user is muted`,
        inline: false
    },
    {
        name: `${prefix}purge <number of messages>`,
        value: `Example: ${prefix}purge 50, will delete the last 50 messages, **NEED PERMISSION:** \`MANAGE_MESSAGES\``,
        inline: false
        
    },
    {
        name: `${prefix}vc-mute @user`,
        value: `Will server mute that user in voice channels, **NEED PERMISSION:** \`MUTE_MEMBERS\``,
        inline: false
    },
    {
        name: `${prefix}vc-unmute @user`,
        value: `Will server unmute that user in voice channels, **NEED PERMISSION:** \`MUTE_MEMBERS\``,
        inline: false
    },
    {
        name: `${prefix}deafen @user`,
        value: `Will server deafen that user in voice channels, **NEED PERMISSION:** \`DEAFEN_MEMBERS\``,
        inline: false
    },
    {
        name: `${prefix}undeafen @user`,
        value: `Will server undeafen that user in voice channels, **NEED PERMISSION:** \`DEAFEN_MEMBERS\``,
        inline: false
    },
    {
        name: `${prefix}disconnect @user`,
        value: `Will disconnect the user from the voice channel, **NEED PERMISSION:** \`MOVE_MEMBERS\``,
        inline: false
        
    },
    {
        name: `${prefix}deletechannel`,
        value: `Deletes the channel the command is performed in.`,
        inline: false
    },
    {
        name: `${prefix}warn @user reason`,
        value: `Warn a user, **NEED PERMISSION:** \`ADMINISTRATOR\``,
        inline: false
    },
    {
        name: `${prefix}lw`,
        value: `Will list a members warnings.`,
        inline: false
    },
    {
        name: `${prefix}delete-warning @user warn ID`,
        value: `Deletes a members warning, **NEED PERMISSION:** \`ADMINISTRATOR\``,
        inline: false
    })

        message.channel.send(embed)
    }}