const { statusMessages, suggestionCache } = require('../../features/features/suggestions/suggestions')
const { MessageEmbed } = require('discord.js')
const { Error } = require('mongoose')
const modLogsSchema = require('../../schemas/mod-logs-schema')

module.exports = {
    commands: ['suggestion'],
    permissions: 'ADMINISTRATOR',
    expectedArgs: 'suggestion <message ID> <status> <reason>',
    permissionError: 'You don\'t have the required permissions.',
    minArgs: 2,
    callback: async (message, arguments, text) => {
        const { guild } = message

        const messageId = arguments.shift()
        const status = arguments.shift().toUpperCase()
        const reason = arguments.join(' ')

        message.delete()

        const newStatus = statusMessages[status]

        if (!newStatus) {
            message.reply(`Unknown status "${status}", please use ${Object.keys(statusMessages)}`)
            return
        }

        const channelId = suggestionCache()[guild.id]
        if (!channelId) {
            message.reply('An error has occurred, please report this.')
            return
        }

        const channel = guild.channels.cache.get(channelId)
        if (!channel) {
            message.reply('The suggestion channel no longer exists')
            return
        }

        const targetMessage = await channel.messages.fetch(messageId, false, true)
        if (!targetMessage) {
            message.reply('That message no longer exists')
            return
        }


        const oldEmbed = targetMessage.embeds[0]
        oldEmbed.setColor(newStatus.color)
        oldEmbed.setThumbnail(newStatus.image)
        oldEmbed.fields = [];
        oldEmbed.addFields({
        name: '**Status:**',
        value: `\n${newStatus.text}${reason ? ` \n**Reason:**\n${reason}` : ''}`
    
        })

        targetMessage.edit(oldEmbed)

        const time = message.createdTimestamp
        const now = new Date(Date.now())
      
        let fetch = await channel.messages.fetch(messageId)

      


        const oldEmbed1 = targetMessage.embeds[0]
        oldEmbed.setColor(newStatus.color)
        oldEmbed.setTitle('Suggestion Was Reviewed!')
        oldEmbed.setThumbnail(newStatus.image)
        oldEmbed.setFooter(`Limitless Suggestions System`)
        oldEmbed.fields = [];
        oldEmbed.addFields({
        name: '**Status Changed By Staff:**',
        value: `\n\n${newStatus.text}${reason ? ` \n\n**Reason:**\n${reason}` : ''}`
        },
        {
            name: '**Date:**',
            value: `${now.toLocaleDateString()}`
            },
            {
                name: '**Time:**',
            value: `${now.toLocaleTimeString()}`
            },
            {
            name: '**Staff Member:**',
            value: message.author
        },
        {
            name: '**Suggestion Message Link:**',
            value: `[Click Me](${fetch.url})`
        })


        
    c = await modLogsSchema.findOne({
        _id: guild.id
      })
  
      if (c) {
  
      const channelId = c.channelId
  
      const channel = await message.guild.channels.cache.get(channelId)

      channel.send(oldEmbed1)
      }
        message.reply('I have changed the status of that suggestion!')
    
      
    }}