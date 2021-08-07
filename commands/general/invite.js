const Discord = require("discord.js")
const cBase = require('../command-base')

module.exports = {
    commands: ['invite'],
    description: "Describes all of this bot's commands",
    expectedArgs: 'invite',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {

        const prefix = cBase.prefix

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Invite Links__**')
        .setColor('RANDOM')
        .setFooter(`${message.author.username}`)
        .setThumbnail('https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png')
        .setDescription('[Invite with administrator permissions (RECOMMENDED)](https://discord.com/api/oauth2/authorize?client_id=814913860900749333&permissions=8&scope=bot)\n\n[Join with all perms except administrator](https://discord.com/api/oauth2/authorize?client_id=814913860900749333&permissions=4294967287&scope=bot)\n\n[Join our support server to get help](https://discord.gg/SbNs7CexP6)\n\n[To donate, join the support server and go to #open-a-ticket](https://discord.gg/SbNs7CexP6)')
        .setThumbnail('https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png')

        message.channel.send(embed)
    }}