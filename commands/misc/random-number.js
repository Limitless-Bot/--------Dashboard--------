const Discord = require("discord.js")

module.exports = {
    commands: ['r-n', 'random-number',],
    expectedArgs: 'random-number <min number> <max number>',
    minArgs: 2,
    maxArgs: 2,
    callback: (message, arguments, text) => {

        const splited = message.content.trim().split(' ');
        const min = splited[1];
        const max = splited[2];


        if (min >= max) {
            message.reply(
              `Your minimum number can\'t be bigger than the max number!`,
            );
            return;
          }
      
          message.reply(`Here is your random number between ${min} and ${max}: **${Math.floor(Math.random() * (max - min) + min)}**`);
    }}