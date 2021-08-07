const Discord = require("discord.js")
const cBase = require('../command-base')

module.exports = {
    commands: ['help-games'],
    expectedArgs: 'help-games',
    minArgs: 0,
    callback: (message, arguments, text) => {

        const prefix = cBase.prefix
        
        let embed = new Discord.MessageEmbed()
        .setTitle('**__Games Help Commands__**')
        .setColor('RANDOM')
        .setFooter(`${message.author.username}`)
        .setThumbnail('https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png')
        .setDescription(`[Support Server](https://discord.gg/SbNs7CexP6) **|** [Invite](https://discord.com/api/oauth2/authorize?client_id=814913860900749333&permissions=8&scope=bot) **|** [Website](https://limitless-d1eafe.webflow.io/)\n**${prefix}report** (Reports a problem to developers) \n\n**The following commands are used to play games:**`)
        .addFields({
            name: `${prefix}ttt @user`,
        value: `Plays a game of tic-tac-toe with the mentioned user!`,
        inline: false

        },
        {
        name: `${prefix}ttt-ai`,
        value: `Plays a game of tic-tac-toe with the bot!`,
        inline: false

        },
        {



            name: `${prefix}rps rock/paper/scissors`,
            value: "Will play a game of rock, paper, scissors with you",
            inline: false
       
        },
        {
            name: `${prefix}hangman`,
            value: `Plays a game of hangman`,
            inline: false


        },
        {

            name: `${prefix}connect4 <@player>`,
            value: `Plays a game of connect 4 with the mentioned used!`,
            inline: false

        },
        {

            name: `${prefix}gtn`,
            value: `Plays a game of guess the number!`,
            inline: false

        },
        {
            name: `${prefix}ft`,
            value: `Plays a game of fast type with anyone in the channel, see who can type the word the fastest!`,
            inline: false

        },
        {
            name: `${prefix}aki`,
            value: `Plays a game of akinator!`,
            inline: false

        },
        {

            name: `${prefix}snake-game`,
            value: `Plays a game of snake!`,
            inline: false

    })

        message.channel.send(embed)
    }}