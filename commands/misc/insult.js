const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
    commands: ['insult'],
    expectedArgs: 'insult',
   callback: async (message, args) => {
    fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
    .then(res => res.json())
    .then(json => {
      const embed = new MessageEmbed()
      .setColor('RANDOM')
        .setAuthor(
          'Evil Insult',
          'https://i.imgur.com/bOVpNAX.png',
          'https://evilinsult.com'
        )
        .setDescription(json.insult)
        .setTimestamp()
        .setFooter('Powered by: Limitless, Provided by: evilinsult.com', '');
      message.channel.send(embed);
      return;
    })
    .catch(err => {
      message.reply(':x: Failed to deliver insult!');
      return console.error(err);
    });
}
};