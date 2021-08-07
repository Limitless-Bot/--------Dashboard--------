const Discord = require("discord.js")
const maxSchema  = require('../../schemas/max-clock-in-schema')

module.exports = {
  commands: ['set-shift-max-user', 'set-shifts-max-user', 'set-shift-max-users', 'set-shifts-max-users'],
  minArgs: 1,
  maxArgs: 1,
  permissions: 'ADMINISTRATOR',
  expectedArgs: 'set-shifts-max-user <number of users>',
  permissionError: 'You don\'t have the required permissions.',
  callback: async (message, arguments, author) => {

    const guildId = message.guild.id
    const maxU = arguments[0]

    if (isNaN(maxU)) {
        message.channel.send(`${maxU} is not a number!`)
        return
    }


    await maxSchema.findOneAndUpdate({
        guildId,
    },{
        max: maxU
    },{
        upsert: true,
    })

    message.channel.send(`Shift max clock in's has been set to ${maxU} users.`)
  }}