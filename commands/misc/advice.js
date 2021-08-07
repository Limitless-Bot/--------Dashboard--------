const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
    commands: ['advice'],
    expectedArgs: 'advice',
   callback: async (message, args) => {

        fetch('https://api.adviceslip.com/advice')
          .then(res => res.json())
          .then(json => {
            const embed = new MessageEmbed()
              .setColor('#403B3A')
              .setAuthor(
                'Advice Slip',
                'https://i.imgur.com/8pIvnmD.png',
                'https://adviceslip.com/'
              )
              .setDescription(json.slip.advice)
              .setColor('RANDOM')
              .setTimestamp()
              .setFooter('Powered by: Limitless, Advice from: adviceslip.com', '');
            message.channel.send(embed);
            return;
          })
          .catch(err => {
            message.reply('Failed to deliver advice :sob:');
            return console.error(err);
      
          })
        }}