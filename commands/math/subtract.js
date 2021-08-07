const Discord = require("discord.js")

module.exports = {
  commands: ['sub', 'subtract'],
  expectedArgs: 'sub <num1> <num2>',
  minArgs: 2,
  maxArgs: 2,
  callback: (message, arguments, text) => {
    const { guild } = message

    const num1 = +arguments[0]
    const num2 = +arguments[1]
    const { name } = guild
    const icon = guild.iconURL()

    const embed = new Discord.MessageEmbed()
    .setTitle(`*Limitless*`)
    .setThumbnail(icon)
    .setColor('RANDOM')
    .addFields({
        name: `${num1} - ${num2} =`,
        value: `**${num1 - num2}**`,
    })


    message.channel.send(embed)
    
  }}