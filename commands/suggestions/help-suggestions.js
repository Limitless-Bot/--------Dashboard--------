const Discord = require('discord.js')
const cBase = require('../command-base')

module.exports = {
    commands: ['help-suggestions'],
    expectedArgs: 'help-suggestions',
    minArgs: 0,
    callback: async (message, arguments, text) => {



      const prefix = cBase.prefix



        let embed = new Discord.MessageEmbed()
        .setTitle('**__Suggestions Help Commands__**')
        .setFooter(`In the suggestion channel, type: => before your message if you don\'t want it to turn into a suggestion!`)
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png')
        .setDescription(`[Support Server](https://discord.gg/SbNs7CexP6) **|** [Invite](https://discord.com/api/oauth2/authorize?client_id=814913860900749333&permissions=8&scope=bot) **|** [Website](https://limitless-d1eafe.webflow.io/)\n**${prefix}report** (Reports a problem to developers) \n\n**The following are the bots suggestion commands:**`)
        .addFields({
        name: `${prefix}set-suggestions`,
        value: `E.g. ${prefix}set-suggestions #sugestions, this will set your suggestions channel, anything typed in that channel will be turned into a suggestion without a command, **NEED PERMISSION:** \`ADMINISTRATOR\``,
        inline: false
      },
      {
          name: `${prefix}suggestion <suggestion message id> <accepted/denied/pending/waiting> [reason]`,
          value: `E.g. ${prefix}suggestion 0678493746452 accepted this will be implemented soon , this will accept/deny suggestions and will edit the status in the original suggestion message, you can also include an OPTIONAL reason, **NEED PERMISSION:** \`ADMINISTRATOR\``,
          inline: false
        },
      )
          
          message.channel.send(embed)
      




    }}