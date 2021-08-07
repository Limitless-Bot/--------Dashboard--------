const Discord = require("discord.js")
const cBase = require('../command-base')
const prefix = cBase.prefix

module.exports = {
      commands: ['giveaway'],
      permissionError: "You thought you could be a sneaky boi, guess you are not important enough for this command",
      minArgs: 4,
      maxArgs: null,
      example: '-giveaway 3h 854131615249072138 @Srgt Potato#0838 @Giveaways 1 Free Discord nitro classic',
      expectedArgs: 'giveaway <time (e.g. 1h or 1m, **only in hours or mins (h or m)**)> <Giveaway Channel ID> <@ mention host> <@mention ping> <amount of winners> <prize>',
      permissions: 'ADMINISTRATOR',
      callback: async (message, args, text) => {

        const { guild } = message
      
        try {
        const client = message.client

        async function giveaway() {
            let time_length = ""
            
            if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You don\'t have enough permissions to use this command.');
            if (!message.content.split(' ')[1]) return message.channel.send(`Please follow the format. example : ``${prefix}giveaway 1h 773665434612138024 @Giveaways @SrgtPotato 1 A month of Xbox Gamepass``.`);
            
            const prize = message.content.split(' ').slice(6).join(' ');
            let amount = message.content.split(' ')[5]
            let ping = message.content.split(' ')[4]
            let host = message.content.split(' ')[3]
            let channel = message.content.split(' ')[2]
            const channelId = channel
            const started_time_duration_start = message.content.split(' ')[1]
            
            if (started_time_duration_start.toLowerCase().includes("h")){
                started_time_duration = started_time_duration_start.split("h")[0]
                time_duration = started_time_duration * 3600000
                if (time_duration == 3600000){time_length = "hour"}
                if (time_duration > 7200000){time_length = "hours"}
            }

            if (started_time_duration_start.toLowerCase().includes("m")){
                started_time_duration = started_time_duration_start.split('m')[0]
                time_duration = started_time_duration * 60000
                if (time_duration < 3600000){time_length = "minutes"}
                if (time_duration == 60000){time_length = "minute"}
            }

            if (isNaN(started_time_duration)) return message.channel.send('The duration time has to be a number.');
            
            if (started_time_duration < 1) return message.channel.send('The duration time has to be either a minutes or hours **(m or h)**.');
            
            if (!message.guild.channels.cache.find(channels => channels.id === `${channel}`)) return message.channel.send("Please enter a valid id of the channel you want the giveaway to be sent.")
            
            if (prize === '') return message.channel.send('You have to enter a prize or enter the correct duration number.');
            message.channel.send(`I started the giveaway in <#${channel}>`)


            const embed = new Discord.MessageEmbed()
              .setTitle("New Giveaway!")
              .setColor('#21b1e3')
              .setDescription(`React with 🎉 to enter the giveaway!\n\nPrize: ${prize}\n\nGiveaway duration: **${started_time_duration}** ${time_length}\n\nAmount of Winners: ${amount}\n\nHosted by: ${host}`)
              .setTimestamp(Date.now() + time_duration)
              .setThumbnail('https://media4.giphy.com/media/ifYQTWkQYlQLmndV5J/giphy.gif')
              .setFooter('Ends:')
            let msg = await client.channels.cache.get(`${channel}`).send(ping, embed)
              await msg.react('🎉')
                setTimeout(() => {
                  msg.reactions.cache.get('🎉').users.remove(client.user.id)
                    setTimeout( async () => {
               
                      
            let winner = msg.reactions.cache.get('🎉').users.cache.random(amount);
            if (msg.reactions.cache.get('🎉').users.cache.size < 1) {
                const winner_embed = new Discord.MessageEmbed()
                    .setTitle("Giveaway Ended: No Winners")
                    .setColor('#e92855')
                    .setDescription(`No one entered the giveaway 🙁, I can\'t pick a winner!\n\nHosted by: ${host}`)
                    .setTimestamp()
                    .setFooter('Ended:')
                    .setThumbnail('https://i.pinimg.com/originals/c7/eb/5b/c7eb5bbae52025b4d2ad9b8224022bd4.gif')
                    msg.edit(winner_embed);
            }
            if (!msg.reactions.cache.get('🎉').users.cache.size < 1) {
                const winner_embed = new Discord.MessageEmbed()
                    .setTitle("Giveaway Ended!")
                    .setColor('#f9b428')
                    .setDescription(`Winner(s):\n${winner}\n\nPrize: ${prize}\n\nHosted by: ${host}`)
                    .setTimestamp()
                    .setFooter('Ended:')
                    .setThumbnail('https://media2.giphy.com/media/2gtoSIzdrSMFO/giphy.gif')
                    msg.edit(winner_embed);
                    msg.channel.send(`Congrats ${winner} you won: ${prize}!`)

                    const channel = guild.channels.cache.get(channelId)
                    let fetch = await channel.messages.fetch(msg.id)
                  
                    const dmembed = new Discord.MessageEmbed()
                    .setTitle('You won a giveaway!')
                    .setColor('RANDOM')
                    .setTimestamp()
                    .setDescription(`Congratulations ${winner}, you have won a giveaway!\n\nServer: ${guild} [[Click Me](${fetch.url})]\n\nGiveaway Prize: ${prize}\n\nVisit that server and see what the instructions are to claim it!`)
                    .setFooter('Limitless Giveaways')

                    for (const winners of winner) {
                        winners.send(dmembed)
                    }

            }}, 1000);
            }, time_duration);
            }
            giveaway();
          } catch (err) {
        }}}