const leaveSchema = require('../../schemas/guild-leave')

module.exports = {
    commands: ['set-leave', 'set-goodbye'],
    permissions: 'MANAGE_GUILD',
    minArgs: 2,
    expectedArgs: 'set-leave <#channel> <goodbye Message>',
    permissionError: 'You don\'t have the required permissions.',
    callback: async (message, arguments, text) => {

        const channel = message.mentions.channels.first() 
        if (!channel) {
            message.reply(`Please mention a channel.`)
            return
        }

        const guildId = message.guild.id
        const channelId = channel.id
        arguments.shift()
        const leavemessage = arguments.join(' ')
        

        await leaveSchema.findOneAndUpdate(
        {
            guildId,
        },
        {
            guildId,
            channelId,
            leavemessage
        },
        {
            upsert: true
        })

        message.channel.send(`The goodbye channel has been set to ${channel}, the goodbye message will be: ${leavemessage}`)

        
    }}