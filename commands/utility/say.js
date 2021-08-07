const cBase = require('../command-base')

 module.exports = {
    commands: ['say'],
    expectedArgs: 'say <what you want the bot to say>',
    minArgs: 1,
    maxArgs: null,
    permissionError: 'You don\'t have the required permissions.',
    permissions: 'ADMINISTRATOR',
    callback: (message, arguments, text) => {

        const prefix = cBase.prefix
        
        message.delete()

        const { guild } = message

        const msg = message.content.replace(`${prefix}say `, '')
        
       
        const { name } = guild
        const icon = guild.iconURL()
        const authorID = message.author.id
        const time = message.createdTimestamp
        const now = new Date(Date.now())
        const textChannel = message.mentions.channels.first()
    
        message.channel.send(msg)
    }}