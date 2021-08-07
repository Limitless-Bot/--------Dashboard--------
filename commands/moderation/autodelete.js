const { MessageEmbed, Util } = require('discord.js');
const autodeleteSchema = require('../../schemas/autodelete')

module.exports = {
    commands: ['autodelete'],
    permissionError: "You thought you could be a sneaky boi, guess you are not important enough for this command",
    expectedArgs: 'autodelete <sentence/word it should auto delete>',
    minArgs: 1,
    maxArgs: null,
    permissions: 'MANAGE_MESSAGES',
    callback: async (message, arguments, text) => {

        const guildId = message.guild.id


    
        let targetWords = arguments.join(' ').toUpperCase()

        const result = await autodeleteSchema.find({
            guildId,
        })

        let lastId = result[result.length - 1]
        if (!lastId) {
            lastId = {
                id: 0
            }
        }
        

        await new autodeleteSchema(
            {
                id: parseFloat(lastId.id) + 1,
                guildId,
                targetWords,
            }).save()
      
        message.channel.send('Set autodelete')

    }};
