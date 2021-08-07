const Discord = require("discord.js")

module.exports = {
    commands: ['tacobell'],
    expectedArgs: 'tacobell [@mention user]',
    minArgs: null,
    maxArgs: null,
    callback: async (message, arguments, text) => {

        let user = message.mentions.users.first() || message.author;

        message.channel
    .send({embed: {thumbnail: 'https://media1.tenor.com/images/5675e7e773bde91de2e54f088e88c5b1/tenor.gif?itemid=6117216', description: `*${user}: starts eating Taco Bell.*`, color: "RANDOM", timestamp: new Date()}})
    .then((msg) => {
      setTimeout(() => {
        msg.edit({embed: {description: `*${user}: stomach starts to turn*`, thumbnail: 'https://media1.tenor.com/images/f7b952a1481401824321f1961a3b8f95/tenor.gif?itemid=10045644', color: "RANDOM", timestamp: new Date()}});
      }, 3000);
      setTimeout(() => {
        msg.edit({embed: {description: `*${user} says: "EVERYBODY MOVE, TACO BELL BOMB INBOUND!!!"* `, thumbnail: 'https://media.tenor.com/images/78ef1edd50243d8da43c124c891ea037/tenor.gif', color: "RANDOM", timestamp: new Date()}});
      }, 6000);
      setTimeout(() => {
        msg.edit({embed: {description: `*${user}: doesn't make it to the toilet..."*`, thumbnail: 'https://media.tenor.com/images/60dc953826c95d2c3e383aa865bbf239/tenor.gif', color: "RANDOM", timestamp: new Date()}});
      }, 9000);
      setTimeout(() => {
        msg.edit({embed: {description: `**🌮🌮🌮 + 😃 = 💩💩💩** ️`, thumbnail: 'https://media1.tenor.com/images/4d2ab196c9eaf07a7111a7bef96c2356/tenor.gif?itemid=4945024', color: "RANDOM", timestamp: new Date()}});
      }, 12000);
      setTimeout(() => {
        msg.edit({embed: {description: `*${user}: has had an accident...*`, thumbnail: 'https://media1.tenor.com/images/77723cd863e32f2436ec5b95a6c4a7cb/tenor.gif?itemid=14762730', color: "RANDOM", timestamp: new Date()}});
      }, 15000);
      setTimeout(() => {
        msg.edit({embed: {description: "*Looks like the Taco Bell Nuclear Bomb went off. Everyone is covered... thanks a lot" + `${user}.*`, thumbnail: 'https://media.tenor.com/images/9aac6df1feb41129c4bd52013b0cc534/tenor.gif', color: "RANDOM", timestamp: new Date()}});
      }, 20000);
    });

}}