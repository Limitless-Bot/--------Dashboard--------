const shiftsLeaderboardSchema = require('../../schemas/shift-leaderboard-schema')

module.exports = {
  commands: ['remove-shifts-lb'],
  minArgs: 0,
  maxArgs: 0,
  expectedArgs: 'remove-shifts-lb',
  permissions: 'ADMINISTRATOR',
  permissionError: 'You don\'t have the required permissions.',
  callback: async (message, arguments) => {
    const { guild, channel } = message
    const guildId = guild.id
    const channelId = channel.id

    await shiftsLeaderboardSchema.findOneAndDelete({
        _id: guildId
    }, {
        _id: guildId
    })

    message.reply('Shift leaderboard removed!')

  }
}