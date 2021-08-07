const Discord = require("discord.js")
const mongo = require('../../mongo')
const commandPrefixSchema = require('../../schemas/cmd-prefix-schema')

const commandBase = require('../command-base')

module.exports = {
  commands: 'set-prefix',
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: "set-prefix <new prefix>",
  permissionError: 'You must be an admin to run this command.',
  permissions: 'ADMINISTRATOR',
  callback: async (message, arguments, text) => {
    await mongo().then(async (mongoose) => {
        const guildId = message.guild.id
        const prefix = arguments[0]

        await commandPrefixSchema.findOneAndUpdate(
          {
            _id: guildId,
          },
          {
            _id: guildId,
            prefix,
          },
          {
            upsert: true,
          }
        )
    
        const embed = new Discord.MessageEmbed()
        .setTitle(`Limitless`)
        .setDescription(`The prefix for this bot is now:    \n \`${prefix}\``)
        .setTimestamp()


        message.channel.send(embed)

        // Update the cache
        commandBase.updateCache(guildId, prefix)
    })
  },
}
