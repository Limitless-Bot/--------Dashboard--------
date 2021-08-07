const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
    commands: ['fortune'],
    expectedArgs: 'fortune',
   callback: async (message, args) => {
    try {
        const res = await fetch('http://yerkee.com/api/fortune');
        const json = await res.json();
        const embed = new MessageEmbed()
        .setColor('RANDOM')
          .setAuthor(
            'Fortune Cookie',
            'https://i.imgur.com/58wIjK0.png',
            'https://yerkee.com'
          )
          .setDescription(json.fortune)
          .setTimestamp()
          .setFooter('Powered by: Limitless, Provided By: yerkee.com', '');
        message.channel.send(embed);
        return;
      } catch (e) {
        message.reply(':x: Could not obtain a fortune cookie!');
        return console.error(e);
      }
    }
  };
  