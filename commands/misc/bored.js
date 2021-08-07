const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
    commands: ['bored'],
    expectedArgs: 'bored',
   callback: async (message, args) => {
    fetch('https://www.boredapi.com/api/activity?participants=1')
    .then(res => res.json())
    .then(json => {
      const embed = new MessageEmbed()
        .setColor('#6BA3FF')
        .setAuthor(
          'Bored Activites',
          'https://i.imgur.com/7Y2F38n.png',
          'https://www.boredapi.com/'
        )
        .setDescription(json.activity)
        .setTimestamp()
        .setColor('RANDOM')
        .setFooter('Powered by: Limitless, Provided By: boredapi.com', '');
      message.channel.send(embed);
      return;
    })
    .catch(err => {
      message.reply('Failed to deliver activity :sob:');
      return console.error(err);
    });
}
};
