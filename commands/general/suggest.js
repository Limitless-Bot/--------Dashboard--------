const Discord = require("discord.js")

module.exports = {
      commands: ['suggest'],
      minArgs: 1,
      maxArgs: null,
      expectedArgs: 'suggest <suggestion for bot devs>',
      callback: (message) => {
        
        const client  = message.client

        const {
            guild,
            member
        } = message

        const content = message.content.split(' ').slice(1).join(' ');

        const attachments = (message.attachments).array();
        const attachment = attachments[0]
 

        if (message.channel.type === 'dm') {
            return
          }

          const channel = client.channels.cache.get('833834060718669834')

          const embed2 = new Discord.MessageEmbed()
          .setDescription('I have sent your suggestion to the developers, you can see the status of the suggestion in the [Support Server](https://discord.gg/SbNs7CexP6)')
          .setColor('RANDOM')

          message.channel.send(`${message.author}`)
          message.reply(embed2)
       
          

        const embed = new Discord.MessageEmbed()
                .setColor(0xffea00,)
                .setAuthor(member.displayName, member.user.displayAvatarURL())
                .setDescription(`**Suggestion:**\n${content}`)
                .setThumbnail('https://c.tenor.com/kjVkxy08GyMAAAAj/vote-votes.gif')
                .addFields({
                    name: '**Status:**',
                    value: '🗳️ Waiting on the community to vote on this suggestion! 🗳️'
                })
                .setFooter('Want to suggest something? Simply type it in this channel (Can include images)')
                if (attachments.length !== 0) {
                    embed.setImage(attachment.proxyURL)
                }
                channel.send(embed)
                    .then(message => {
                        message.react('✅')
                            .then(() => {
                                message.react('❌')
                            })

               

               

              

            })}}