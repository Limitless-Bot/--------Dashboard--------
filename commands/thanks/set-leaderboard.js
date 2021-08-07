const Discord = require("discord.js")
const client = new Discord.Client()
const thanksLeaderboardSchema = require('../../schemas/thanks-leaderboard-schema')

module.exports = {
  commands: ['set-thanks-lb'],
  minArgs: 0,
  maxArgs: 0,
  expectedArgs: 'set-thanks-lb',
  permissions: 'ADMINISTRATOR',
  callback: async (message, arguments) => {
    const { guild, channel } = message
    const guildId = guild.id
    const channelId = channel.id

    await thanksLeaderboardSchema.findOneAndUpdate({
        _id: guildId,
        channelId
    }, {
        _id: guildId,
        channelId
    }, {
        upsert: true
    })

    message.reply('Thanks leaderboard set!')
    .then((message) => {
        message.delete({
            timeout: 1000 * 5
        })
    })
    message.delete()
  }
}