const Discord = require("discord.js")
const timeSchema  = require('../../schemas/shift-time')

module.exports = {
  commands: ['set-shift-time', 'set-shifts-time'],
  minArgs: 1,
  maxArgs: 1,
  permissions: 'ADMINISTRATOR',
  expectedArgs: "set-shift-time <number of minutes>",
  permissionError: 'You don\'t have the required permissions.',
  callback: async (message, arguments, author) => {

    const guildId = message.guild.id

    const time = arguments[0]

    if (isNaN(time)) {
        message.channel.send(`${time} is not a number!`)
        return
    }


    const result = await timeSchema.findOneAndUpdate({
        guildId,
    },{
        time,
    },{
        upsert: true,
    })

    message.channel.send(`Shift lenth set to ${time} minutes.`)
  }}