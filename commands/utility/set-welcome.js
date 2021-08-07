const welcomeSchema = require('../../schemas/welcome')

module.exports = {
    commands: ['set-welcome'],
    permissions: 'MANAGE_GUILD',
    minArgs: 2,
    expectedArgs: 'set-welcome <#channel> <Welcome Message>',
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
        const welcomemessage = arguments.join(' ')
        

        await welcomeSchema.findOneAndUpdate(
        {
            guildId,
        },
        {
            guildId,
            channelId,
            welcomemessage
        },
        {
            upsert: true
        })

        message.channel.send(`The welcome channel has been set to ${channel}, the welcome message will be: ${welcomemessage}`)

        
    }}