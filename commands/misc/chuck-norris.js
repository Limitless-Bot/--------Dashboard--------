const Discord = require("discord.js")
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
    commands: 'chuck-norris',
    expectedArgs: 'chuck-norris',
    minArgs: 0,
    maxArgs: 0,
    callback: async (message, args) => {

        fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then(json => {
        const embed = new MessageEmbed()
          .setColor('#CD7232')
          .setAuthor(
            'Chuck Norris',
            'https://i.imgur.com/wr1g92v.png',
            'https://chucknorris.io'
          )
          .setDescription(json.value)
          .setTimestamp()
          .setFooter('Powered by Limitless', '');
        message.channel.send(embed);
        return;
      })
      .catch(err => {
        message.reply(':x: An error occured, Chuck is investigating this!');
        return console.error(err);
      });
  }
}