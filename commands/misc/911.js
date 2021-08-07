const Discord = require("discord.js")

module.exports = {
    commands: ['911', '999'],
    minArgs: 0,
    expectedArgs: '911',
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const client  = message.client
        const authorID = message.author.id

          const questions = [
            '🚨🚨🚨911 What\'s your emergancy?🚨🚨🚨',
            'What is your location?',
            'Do you need Fire, Ems or Police to your location?'
          ]
          
        let counter = 0

        const filter = m => m.author.id === message.author.id

        const collector = new Discord.MessageCollector(message.channel, filter, {
            max: questions.length,
            time: 1000 * 180 // 180s
        })
        
        collector.on('collect', message => {
            if (counter < questions.length) {
                message.channel.send(questions[counter++])
            }
        })

        collector.on('end', collected => {

            let counter = 0

            collected.forEach((value) => {
  
            message.channel.send(questions[counter++], value.content);


            })
        })
        
      }}
