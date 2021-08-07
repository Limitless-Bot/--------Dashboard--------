const Discord = require("discord.js")

module.exports = {
    commands: ['duck'],
    expectedArgs: 'duck',
    minArgs: 0,
    maxArgs: 0,
    category: 'Animal_1',
    expectedArgs: 'duck',
    example: 'duck',
    description: 'Shows a picture of a duck.',
    callback: (message, arguments, text) => {

        const pics = [
            'https://tse1.mm.bing.net/th/id/OIP.XD4BHMIRM8-S803l3CDLtQHaIy?w=158&h=188&c=7&o=5&pid=1.7',
            'https://tse3.mm.bing.net/th/id/OIP.aFai3jvdvnptUSlMAT0Y6AHaHa?w=189&h=188&c=7&o=5&pid=1.7',
            'https://tse2.mm.bing.net/th/id/OIP.b6KjNG_mwqx_dP8kWyjdcQHaFj?w=219&h=180&c=7&o=5&pid=1.7',
            'https://tse4.mm.bing.net/th/id/OIP.Cn510UHLPqT-VaL1IZ0iuAHaEo?w=265&h=180&c=7&o=5&pid=1.7',
            'https://tse3.mm.bing.net/th/id/OIP.-W4OunS_gaHpcvxtMrR8mAHaFg?w=280&h=208&c=7&o=5&pid=1.7',
            'https://tse1.mm.bing.net/th/id/OIP.tZyFrptwmPqJbaUC7cagYgHaEK?w=324&h=182&c=7&o=5&pid=1.7',
            'https://tse1.mm.bing.net/th/id/OIP.ApB2PrwoEFYHEBtqEaugWgHaEo?w=255&h=180&c=7&o=5&pid=1.7',
            'https://tse4.mm.bing.net/th/id/OIP.-p9CWOtH1f51-ZVQtzhMZQHaFD?w=247&h=180&c=7&o=5&pid=1.7',
            'https://tse3.mm.bing.net/th/id/OIP.cCNe6AuUsy304GHrfPhWeQHaE7?w=306&h=204&c=7&o=5&pid=1.7',
            'https://tse2.mm.bing.net/th/id/OIP.wmiopm0a3kUdp-hKpaID9gHaEn?w=284&h=180&c=7&o=5&pid=1.7',

        ]

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Duck Picture__**')
        .setFooter(`${message.author.username}`)
        .setColor('RANDOM')
        .setImage(pics[Math.floor(Math.random() * pics.length)])

        message.channel.send(embed)
    }}