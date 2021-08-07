const Discord = require("discord.js")

module.exports = {
    commands: ['puke'],
    expectedArgs: 'puke [@mention user]',
    minArgs: null,
    maxArgs: null,
    callback: async (message, arguments, text) => {

        let user = message.mentions.users.first() || message.author;

        message.channel
    .send({embed: {description: `Umm i think ** ${user}** is feeling ill`, color: "RANDOM", timestamp: new Date()}})
    .then((msg) => {
      setTimeout(() => {
        msg.edit({embed: {description: `${user} are u alright mate? You are looking a bit sick 🤢`, color: "RANDOM", timestamp: new Date()}});
      }, 3000);
      setTimeout(() => {
        msg.edit({embed: {description: `Ewwwwwww! ${user} is vomitting 🤮`, color: "RANDOM", timestamp: new Date()}});
      }, 6000);
      setTimeout(() => {
        msg.edit({embed: {description: `${user} says: "I think there's more"`, color: "RANDOM", timestamp: new Date()}});
      }, 9000);
      setTimeout(() => {
        msg.edit({embed: {description: `🤮🤮🤮🤮🤮`, color: "RANDOM", timestamp: new Date()}});
      }, 12000);
      setTimeout(() => {
        msg.edit({embed: {description: "Everyone is covered in puke. Thanks a lot" + `${user}.`, color: "RANDOM", timestamp: new Date()}});
      }, 20000);
    });

}}