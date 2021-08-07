const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
    commands: ['trump'],
    expectedArgs: 'trump',
   callback: async (message, args) => {

    fetch('https://api.tronalddump.io/random/quote')
      .then(res => res.json())
      .then(json => {
        const embed = new MessageEmbed()
        .setColor('RANDOM')
          .setAuthor(
            'Donald Trump',
            'https://www.whitehouse.gov/wp-content/uploads/2021/01/45_donald_trump.jpg'
          )
          .setDescription(json.value)
          .setTimestamp(json.appeared_at)
          .setFooter('Quotes provided by tronalddump.io!');
        message.channel.send(embed);
        return;
      })
      .catch(err => {
        message.reply('Failed to deliver quote :sob:');
        return console.error(err);
      });
  }
};