const modLogsSchema = require('../../schemas/mod-logs-schema')

module.exports = {
  commands: ['remove-mod-logs'],
  minArgs: 0,
  maxArgs: 0,
  expectedArgs: 'remove-mod-logs',
  permissions: 'ADMINISTRATOR',
  permissionError: 'You don\'t have the required permissions.',
  callback: async (message, arguments) => {
    const { guild, channel } = message
    const guildId = guild.id

    await modLogsSchema.findOneAndDelete({
        _id: guildId
    }, {
        _id: guildId
    })

    message.reply('Mod logs removed!')

  }
}