const Discord = require("discord.js")
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
const cBase = require('../command-base')

module.exports = {
    commands: ['dictionary'],
    expectedArgs: 'dictionary <word you want to lookup>',
    minArgs: 1,
    maxArgs: null,
    callback: async (message, arguments) => {

        const prefix = cBase.prefix

        const text = message.content.replace(`${prefix}dictionary `, '')

        fetch(`https://api.urbandictionary.com/v0/define?term=${text}`)
      .then(res => res.json())
      .then(json => {
        const embed = new MessageEmbed()
          .setColor('#BB7D61')
          .setTitle(`${text}`)
          .setAuthor(
            'Urban Dictionary',
            'https://i.imgur.com/vdoosDm.png',
            'https://urbandictionary.com'
          )
          .setDescription(
            `*${json.list[Math.floor(Math.random() * 1)].definition}*`
          )
          .setURL(json.list[0].permalink)
          .setTimestamp()
          .setFooter('Powered by UrbanDictionary', '');
        message.channel.send(embed);
        return;
      })
      .catch(() => {
        message.reply('Failed to deliver definition :sob:');
        // console.error(err); // no need to spam console for each time it doesn't find a query
        return;
      });
  }
};