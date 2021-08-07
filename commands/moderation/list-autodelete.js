const Discord = require('discord.js')
const autodeleteSchema = require('../../schemas/autodelete')

module.exports = {
    commands: ['listautodeletes', 'listautodelete', 'autodelete-list', 'list-autodelete'],
    minArgs: 0,
    maxArgs: 0,
    permissions: 'MANAGE_MESSAGES',
    permissionError: 'You don\'t have the required permissions.',
    callback: async (message, arguments, text) => {

        const guildId = message.guild.id

        const results = await autodeleteSchema.find({
            guildId,
        })

        let reply = ''

        if (!results) {
            const embed1 = new Discord.MessageEmbed()
            .setDescription(`${reply}This userver has no autodeletes.`)
            .setColor('#8b0000')
            .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
    
            message.channel.send(embed1)
            return
        }

        for (const result of results) {
            const { targetWords, id } = result

            reply += `ID: \`${id}\`\nWord(s) that trigger message deletion: \`${targetWords}\``
        }

        const embed = new Discord.MessageEmbed()
        .setDescription(reply)
        .setColor('#8b0000')
        .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")

        message.channel.send(embed)
    }
}