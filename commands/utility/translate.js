const { MessageEmbed } = require('discord.js');
const ISO6391 = require('iso-639-1');
const translate = require('@vitalets/google-translate-api');

module.exports = {
    commands: ['translate'],
    minArgs: 2,
    maxArgs: null,
    expectedArgs: 'translate <target language> <message>',
    callback: async (message, args, text) => {

        const targetLang = message.content.split(' ')[1]

        const queryText = message.content.split(' ').slice(2).join(' ');

        const langCode = ISO6391.getCode(targetLang);
    if (langCode === '')
      return message.channel.send(':x: Please provide a valid language!');
    translate(queryText, { to: targetLang })
      .then(response => {
        const embed = new MessageEmbed()
          .setColor('#FF0000')
          .setTitle('Translation: ')
          .setURL('https://translate.google.com/')
          .setDescription(response.text)
          .setFooter('Powered by Google Translate!');
        message.channel.send(embed);
      })
      .catch(error => {
        message.reply(
          ':x: Something went wrong when trying to translate the text'
        );
        console.error(error);
      });
  }
};
