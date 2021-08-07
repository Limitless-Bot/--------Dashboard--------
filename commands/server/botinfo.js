const Discord = require("discord.js")

module.exports = {
    commands: ['botinfo'],
    expectedArgs: 'bot-info',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {

        const embed = new Discord.MessageEmbed()
        .setTitle("**__Limitless Bot Info__**")
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png')
        .addFields({
            name: 'Created By',
            value: 'Connor S. (Srgt Potato#3738) & Dylan D. (AMBULANCE-DylanD#8395)',
        },
        {
            name: 'Date Created',
            value: '17/04/21',
        },
        {
            name: 'Bot Creators Region',
            value: 'United Kingdom',
        },
        {
            name: 'Bot Invite Link',
            value: 'https://discord.com/api/oauth2/authorize?client_id=814913860900749333&permissions=8&scope=bot',
        },
        {
            name: 'Support Server',
            value: 'https://discord.gg/Msq4JakEEg',
        })


        message.channel.send(embed)
      }}
