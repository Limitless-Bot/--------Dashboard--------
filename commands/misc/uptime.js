const Discord = require("discord.js")
require("moment-duration-format")

module.exports = {
    commands: ['uptime'],
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: 'uptime',
    callback: (message, arguments, text) => {

        const client  = message.client


        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);    

        let uptimed = `${days} days`;
        let uptimeh = `${hours} hours`; 
        let uptimem = `${minutes} minutes`; 
        let uptimes = `${seconds} seconds`;

        const { guild } = message
      


        const embed = new Discord.MessageEmbed()
        .setTitle("My Uptime:")
        .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
        .setColor('RANDOM')
        .setFooter(message.author.username)
        .addFields({
            name: 'Days',
            value: uptimed,
        },
        {
            name: 'Hours',
            value: uptimeh,
        },
        {
            name: 'Minutes',
            value: uptimem,
        },
        {
            name: 'Seconds',
            value: uptimes,
       
        })

        message.channel.send(embed)

    }}