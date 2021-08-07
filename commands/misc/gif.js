const Discord = require("discord.js")
const config = require('../../config.json')
const fetch = require('node-fetch');
const { tenorAPI } = require('../../config.json');

module.exports = {
    commands: ['gif'],
    expectedArgs: 'gif <gif topic>',
    minArgs: 1,
    maxArgs: null,
    callback: (message, arguments, text) => {

        const gifsearch = message.content.replace(`${config.prefix}gif `, '')

       
            fetch(`https://g.tenor.com/v1/random?key=${tenorAPI}&q=${gifsearch}&limit=1`)
              .then(res => res.json())
              .then(json => message.channel.send(json.results[0].url))
              .catch(function onError() {
                message.reply(':x: Failed to find a gif that matched your query!');
                // console.error(e); // if you uncomment this, add an 'e' parameter to onError
                return;
    
              });
            }
        }
    