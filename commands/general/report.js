const Discord = require("discord.js")

module.exports = {
      commands: ['report'],
      expectedArgs: 'report',
      description: "Describes all of this bot's commands",
      callback: (message) => {
        
        const client  = message.client
        const authorID = message.author.id

          const questions = [
            `<@${authorID}> Please now put in detail your problem or bug you are having with the bot and the developers will look at it as soon as possible! (This will timeout in 3 minutes)`,
            `<@${authorID}> Would you like us to contact you via discord if the issue is resolved/how to resolve it? (This will timeout in 3 minutes)`
          ]
          
        let counter = 0

        const filter = m => m.author.id === message.author.id

        const collector = new Discord.MessageCollector(message.channel, filter, {
            max: questions.length,
            time: 1000 * 180 // 180s
        })

        message.channel.send(questions[counter++])
        
        collector.on('collect', message => {
            if (counter < questions.length) {
                message.channel.send(questions[counter++])
            }
        })

       

        collector.on('end', collected => {
          message.reply('I have sent your problem to the developers, thank you for submitting it!')
            console.log(`Collected ${collected.size} messages `)

            let counter = 0

            collected.forEach((value) => {
            
              const channel = client.channels.cache.get('850088418029600768')
              const embed = new Discord.MessageEmbed()
              .setColor('RANDOM')
              .setThumbnail('https://media.tenor.com/images/c8b03a5d9876f6559a267cc3f468e8e7/tenor.png')
              .addFields({
                name: '**Question:**',
                value: questions[counter++],
        
            },
            {
              name: '**Answer:**',
                value: value.content,
        
            },
            {
              name: 'Submitted By:',
              value: `<@${authorID}> ${authorID}` ,

            })


            channel.send(embed);


            })
        })
      }}