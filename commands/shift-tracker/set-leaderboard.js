const Discord = require("discord.js")
const shiftsLeaderboardSchema = require('../../schemas/shift-leaderboard-schema')

module.exports = {
  commands: ['set-shifts-lb'],
  minArgs: 0,
  maxArgs: 0,
  expectedArgs: 'set-shifts-lb',
  permissions: 'ADMINISTRATOR',
  permissionError: 'You don\'t have the required permissions.',
  callback: async (message, arguments) => {
    const { guild, channel } = message
    const guildId = guild.id
    const channelId = channel.id

    await shiftsLeaderboardSchema.findOneAndUpdate({
        _id: guildId
    }, {
        _id: guildId,
        channelId
    }, {
        upsert: true
    })

    message.reply('Shift leaderboard set!')
    .then((message) => {
        message.delete({
            timeout: 1000 * 5
        })
    })
    message.delete()
  }
}