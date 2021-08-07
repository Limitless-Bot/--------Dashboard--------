const Discord = require("discord.js")
const cBase = require('../command-base')

module.exports = {
    commands: ['help-food', 'help-drink', 'help-food-drink', 'help-drink-food'],
    expectedArgs: 'help-food-drink',
    minArgs: 0,
    callback: (message, arguments, text) => {

        const prefix = cBase.prefix

    const p = `Shows a picture of `
        
        let embed = new Discord.MessageEmbed()
        .setTitle('**__Food and Drink Help Commands__**')
        .setColor('RANDOM')
        .setFooter(`${message.author.username}`)
        .setThumbnail('https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png')
        .setDescription(`[Support Server](https://discord.gg/SbNs7CexP6) **|** [Invite](https://discord.com/api/oauth2/authorize?client_id=814913860900749333&permissions=8&scope=bot) **|** [Website](https://limitless-d1eafe.webflow.io/)\n**${prefix}report** (Reports a problem to developers) \n\n**The following commands will show you a picture of food or drink:**`)
        .addFields({
        name: `${prefix}potato`,
        value: "Shows a picture of a potato",
        inline: false
        },
        {
        name: `${prefix}coke`,
        value: "Shows a picture of coca-cola",
        inline: false
    },
    {
    name: `${prefix}pint`,
    value: "Shows a picture of a pint",
    inline: false
    })

        message.channel.send(embed)
    }}