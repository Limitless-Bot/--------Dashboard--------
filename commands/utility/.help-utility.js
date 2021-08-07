const Discord = require("discord.js")
const cBase = require('../command-base')


module.exports = {
    commands: ['help-utility'],
    expectedArgs: 'help-utility',
    minArgs: 0,
    callback: (message, arguments, text) => {


        const prefix = cBase.prefix
        
        let embed = new Discord.MessageEmbed()
        .setTitle('**__Utility Help Commands__**')
        .setFooter(`${message.author.username}`)
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png')
        .setDescription(`[Support Server](https://discord.gg/SbNs7CexP6) **|** [Invite](https://discord.com/api/oauth2/authorize?client_id=814913860900749333&permissions=8&scope=bot) **|** [Website](https://limitless-d1eafe.webflow.io/)\n**${prefix}report** (Reports a problem to developers) \n\n**The following commands will show you the bots utility commands:**`)
        .addFields({
            name: `${prefix}set-counter <channel ID or #channel> <@role> <Counter name>`,
            value: `Will set a counter for everyone with the mentioned role on the mentioned channel, will update every 10mins.`,
            inline: false
            },
            {
                name: `${prefix}list-counters`,
            value: `Will list all of the counters`,
            inline: false
            },
            {
                name: `${prefix}delete-counter <id>`,
                value: `Will delete the counter with that id`,
                inline: false
                },
                {
            name: `${prefix}set-membercount <channel ID>`,
            value: `Will set a total membercount channel.`,
            inline: false
            },
            {
            name: `${prefix}remove-membercount`,
            value: `Will remove the total membercount channel.`,
            inline: false
            },
            {
            name: `${prefix}set-welcome <#channel> <welcome message>`,
            value: `Will set the servers welcome message to send in a channel when someone joins the server`,
            inline: false
            },
            {
            name: `${prefix}set-leave <#channel> <leave message>`,
            value: `Will set the servers leave message to send in a channel when someone leaves the server`,
            inline: false
             },
            {
            name: `${prefix}delete-welcome`,
            value: `Will delete the servers welcome message when someone joins the server`,
            inline: false
            },
            {
            name: `${prefix}delete-leave`,
            value: `Will delete the servers leave message when someone leaves the server`,
            inline: false
            },
            {
            name: `${prefix}avatar <@user>`,
            value: `Will display that users Profile Picture`,
            inline: false
            },
            {
                name: `${prefix}embed <message>`,
                value: `Will get the bot to embed whatever you type after ${prefix}say-embed`,
                inline: false
            },
            {
                name: `${prefix}say <message>`,
                value: `Will get the bot to say your message, PERMISSION: ADMINISTRATOR`,
                inline: false
            },
            {
            name: `${prefix}hyperlink <link> <what you want it to be displayed as>`,
            value: `Will display a link in the text you want it to be.`,
            inline: false
            },
            {
            name: `${prefix}schedule <#channel> <YYYY/MM/DD> <HH:MM> <"AM" or "PM"> <Timezone>`,
            value: `Will schedule a message to send in the channel at the mentioned time/day. (To make it an embed, start the message with **-embed** when the bot asks what the scheduled message should be.)`,
            inline: false
            },
            {
            name: `${prefix}translate <target language> <message>`,
            value: `Will translate your message (in any language) to the target language`,
            inline: false
            },
            {
                name: `${prefix}giveaway <time (e.g. 1h or 1m, **only in hours or mins (h or m)**)> <Giveaway Channel ID> <@ mention host> <@mention ping> <amount of winners> <prize>`,
            value: `Will start a giveaway and select random winners`,
            inline: false
            },
            {
            name: `${prefix}autoreact <emoji> <target message>`,
            value: `Will react with the emoji if someone says the targeted words. Required permissions: \`**ADMINISTRATOR**\``,
            inline: false
            },
            {
            name: `${prefix}listautoreact`,
            value: `Will list that servers autoreacts.`,
            inline: false
            },
            {
                name: `${prefix}translate <Target Language> <Message>`,
                value: `Will translate the message for you into the target language.`,
                inline: false
                },
                {
            name: `${prefix}delete-autoreact <autoreact ID>`,
            value: `Will delete the specified autoreact. Required permissions: \`**ADMINISTRATOR**\``,
            inline: false
            })

        message.channel.send(embed)
    }}