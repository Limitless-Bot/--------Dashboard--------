const Discord = require("discord.js")
const cBase = require('../command-base')

module.exports = {
    commands: ['8ball'],
    expectedArgs: '8ball <what you want 8ball to predict',
    minArgs: 1,
    maxArgs: null,
    callback: (message, arguments, text) => {
      const { guild } = message

      const prefix = cBase.prefix

      const msg = message.content.replace(`${prefix}8ball `, '')

var res = [
	"It is certain",
    "Without a doubt",
    "You may rely on it",
    "Yes definitely",
    "It is decidedly so",
    "As i see it. Yes",
    "Most likely",
    "Yes",
    "The outlook is good",
    "Signs point to yes",
    "I guess we will find out",
    "Reply hazy, try again",
    "Better not to tell you now",
    "Ask again later",
    "Cannot predict now",
    "Only one way to find out",
    "Concentrate and ask again",
    "Don\'t count on it",
    "Outlooks is not so good",
    "My sources say no",
    "Very doubtful",
    "My reply is no",
    "NO",
    "Who knows...",

]


  
		let embed = new Discord.MessageEmbed()
        .setTitle('**__Magic 8ball!__**')
        .setThumbnail('https://th.bing.com/th/id/R167370cf508a3906a42b08632ff6e8c6?rik=tqd1tQPpfsF7Dw&riu=http%3a%2f%2fwww.psychicreadings911.com%2fwp-content%2fplugins%2fmagic-answers%2fimages%2fball.png&ehk=c3r3p7aMLSqkgtaD3I%2bBapivQZlP2XfHJ1RVyGkgB8M%3d&risl=&pid=ImgRaw')
        .setFooter(`${message.author.username}`)
        .setColor('RANDOM')
        .addFields({
        name: `Question`,
        value: msg,
        inline: false
    },
    {
      name: `Answer`,
      value: (res[Math.floor(Math.random() * res.length)]),
      inline: false
    })
    
    message.channel.send(embed)
	
	}
}