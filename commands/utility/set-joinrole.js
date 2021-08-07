const Discord = require("discord.js")
const joinroleSchema = require('../../schemas/joinrole-schema')

module.exports = {
    commands: ['set-joinrole'],
    permissions: 'MANAGE_GUILD',
    minArgs: 1,
    expectedArgs: 'set-joinrole <@role> [@roles (additional ones, optional)]',
    permissionError: 'You don\'t have the required permissions.',
    callback: async (message, arguments, text) => {

        const { guild } = message
        let roleId = []
        
        const mentions = message.mentions.roles
        
        let reply = 'The autojoin role(s) has been set to:'
        
        if (mentions.first()) {
            for (const mention of mentions) {
                roleId[roleId.length] = mention[0]
                reply += `\n<@&${mention[0]}>`
            }
        }

        if (!mentions.first()) {
            message.reply(`Please mention a role(s).`)
            return
        }

        const {
            guild: { id: guildId }
        } = message

        await joinroleSchema.findOneAndUpdate(
        {
            _id: guildId
        },
        {
            _id: guildId,
            roleId
        },
        {
            upsert: true
        })

            

        reply += '\n\nI will add this to someone when they join the server'



        const embed = new Discord.MessageEmbed()
        .setDescription(reply)
        .setTimestamp()
        .setColor('RANDOM')

        message.reply(embed)

        
    }}