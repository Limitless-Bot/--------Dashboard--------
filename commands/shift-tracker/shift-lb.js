const Discord = require("discord.js")
const shiftsSchema = require('../../schemas/profile-schema')

module.exports = {
    commands: ['shift-lb', 'shift-leaderboard'],
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: 'shift-lb',
    
    callback: async (message, arguments) => {

        const guildId = message.guild.id

    let text = ''

    const results = await shiftsSchema
    .find({
        guildId
    })
    .sort({
        coins: -1
    })

    for (let counter = 0; counter < results.length; ++counter) {
        const { userId, coins = 0 } = results[counter]


        const msg = text += `**#${counter + 1}   **<@${userId}> with **\`${coins}\`** shifts\n\n`
    }



        
        
        let embed = new Discord.MessageEmbed()
        .setTitle(`**__Shift Leaderboard__**`)
        .setColor('#74ee15')
        .setThumbnail(`https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png`)
        .setDescription(text)
        .setFooter('Powered by Limitless')

    message.channel.send(embed)


}}