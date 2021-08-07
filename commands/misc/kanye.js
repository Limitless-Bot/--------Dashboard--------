const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
    commands: ['kanye'],
    expectedArgs: 'kanye',
   callback: async (message, args) => {
    fetch('https://api.kanye.rest/?format=json')
    .then(res => res.json())
    .then(json => {
      const embed = new MessageEmbed()
      .setColor('RANDOM')
        .setAuthor('Kanye West', 'https://i.imgur.com/SsNoHVh.png')
        .setDescription(`"${json.quote}"`)
        .setTimestamp()
        .setFooter('Powered by: Limitless, Provided By: kanye.rest', '');
      message.channel.send(embed);
      return;
    })
    .catch(err => {
      message.reply('Failed to deliver quote :sob:');
      return console.error(err);
    });
}
};