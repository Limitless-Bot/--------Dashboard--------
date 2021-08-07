const Discord = require("discord.js")
const cBase = require('../command-base')
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');


module.exports = {
    commands: ['lookup'],
    expectedArgs: 'lookup <website you want to lookup>',
    minArgs: 1,
    maxArgs: null,
    callback: async (message, arguments, text) => {
        
      const prefix = cBase.prefix

        const textnew = message.content.replace(`${prefix}lookup `, '')

        const resl = textnew;

    try {
      var res = await fetch(`http://ip-api.com/json/${textnew}`); // fetch json data from ip-api.com

      // json results
      const json = await res.json();
      function embedResolve() {
        //embed json results
        return new MessageEmbed()
          .setColor('#42aaf5')
          .setAuthor(
            'IP/Hostname Resolver',
            'https://i.imgur.com/3lIiIv9.png',
            'https://ip-api.com'
          )
          .addFields(
            { name: 'Query', value: resl, inline: true },
            { name: 'Resolves', value: json.query, inline: true },
            { name: '‎', value: '‎', inline: true },
            {
              name: 'Location',
              value: `${json.city}, ${json.zip}, ${json.regionName}, ${json.country}`,
              inline: false
            },
            { name: 'ORG', value: `${json.org}‎`, inline: true }, // organisation who own the ip
            { name: 'ISP', value: json.isp, inline: true }, // internet service provider
            { name: 'OBO', value: json.as, inline: false }
          )
          .setTimestamp(); //img here
      }
      message.channel.send(embedResolve(json.isp));
    } catch (e) {
      console.error(e);
      message.reply(
        'Something went wrong looking for that result, is the api throttled?'
      );
      return;
    }
  }
};