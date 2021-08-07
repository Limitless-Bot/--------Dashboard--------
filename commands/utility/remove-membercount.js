const membercountSchema = require('../../schemas/membercount-schema')

module.exports = {
  commands: ['remove-membercount'],
  minArgs: 0,
  maxArgs: 0,
  expectedArgs: 'remove-membercount',
  permissions: 'MANAGE_CHANNELS',
  permissionError: 'You don\'t have the required permissions.',
  callback: async (message, arguments) => {
    const { guild, channel } = message
    const guildId = guild.id

    const result3 = await membercountSchema.findById(guild.id)
            if (!result3) {
                return
            }

            channelId3 = result3.channelId

            const channelname = guild.channels.cache.get(channelId3)

         

            
            if (channelname) {
                channelname.setName(`ARCHIVED`);
            }

    await membercountSchema.findOneAndDelete({
        _id: guildId
    }, {
        _id: guildId
    })

    message.reply('I have unlinked the membercount from that channel and called it "ARCHIVED"!')

  }
}