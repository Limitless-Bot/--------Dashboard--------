const rolestatsSchema = require('../../schemas/rolestats-schema')

module.exports = {
    commands: ['set-counter'],
    permissions: 'MANAGE_CHANNELS',
    minArgs: 1,
    expectedArgs: 'set-counter <Channel ID or #channel> <@role> <counter name>',
    permissionError: 'You don\'t have the required permissions.',
    callback: async (message, arguments, text, client) => {

        //ChannelID:

        const { guild } = message
        let channelId = ''

        const channelmentions = message.mentions.channels.first()

        if (channelmentions) {
            channelId = channelmentions.id
        }
        if (!channelmentions) {
            channelId = arguments[0]
        }

      //Role:

     
        const roleId = message.mentions.roles.first()

        

        //Counter Name:


        const countername = message.content.split(' ').slice(3).join(' ');

            //Database:

    
            const guildId = message.guild.id

            const result = await rolestatsSchema.find({
                guildId,
            })
    
            let lastId = result[result.length - 1]
            if (!lastId) {
                lastId = {
                    number: 0
                }
            }

        await new rolestatsSchema(
            {
                guildId,
                channelId,
                roleId: roleId.id,
                number: parseFloat(lastId.number) + 1,
                countername
            }).save()

     
           
            const rolemembers = roleId.members
            const amount = rolemembers.size 
            const channelname = guild.channels.cache.get(channelId);
          
            channelname.setName(`${countername}: ${amount}`)

            message.reply('I have set the counter, whenever the role is added to a user, I will update the count of that channel!')

        
          



    }}