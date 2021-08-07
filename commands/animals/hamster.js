const Discord = require("discord.js")

module.exports = {
    commands: ['hamster'],
    expectedArgs: 'hamster',
    minArgs: 0,
    maxArgs: 0,
    category: 'Animal_2',
    expectedArgs: 'hamster',
    example: 'hamster',
    description: 'Shows a picture of a hamster.',
    callback: (message, arguments, text) => {

        const pics = [
            'https://tse4.mm.bing.net/th/id/OIP.zX10bpNGACRo83DeP0o9fgHaFj?w=251&h=188&c=7&o=5&pid=1.7',
            'https://tse3.mm.bing.net/th/id/OIP.b9qyhpDfJeldfZPkIr3dIQHaEA?w=317&h=180&c=7&o=5&pid=1.7',
            'https://tse1.mm.bing.net/th/id/OIP.er3a-PMbyPbuzO_XziuAHwHaFJ?w=246&h=180&c=7&o=5&pid=1.7',
            'https://tse1.mm.bing.net/th/id/OIP.n5eRgm71jsbKa3_zmp03KgHaJ4?w=140&h=188&c=7&o=5&pid=1.7',
            'https://tse2.mm.bing.net/th/id/OIP.NXC70pVqWVc6oDv-YkmC-wHaHa?w=171&h=180&c=7&o=5&pid=1.7',
            'https://tse3.mm.bing.net/th/id/OIP.MIqO7Yj1MPvLNmQ2yTfBqAHaFj?w=217&h=180&c=7&o=5&pid=1.7',
            'https://tse2.mm.bing.net/th/id/OIP.E3ktDTaYlljDTsqPvIcoXQHaE8?w=263&h=180&c=7&o=5&pid=1.7',
            'https://tse2.mm.bing.net/th/id/OIP.yybIIpyrTPdRNtJTx2cmcgHaE8?w=263&h=180&c=7&o=5&pid=1.7',
            'https://tse2.mm.bing.net/th/id/OIP.E3ktDTaYlljDTsqPvIcoXQHaE8?w=300&h=185&c=7&o=5&pid=1.7',
            'https://tse1.mm.bing.net/th/id/OIP.8QCs4We4btCGIkY9J_PO5wHaFH?w=271&h=187&c=7&o=5&pid=1.7',
            'https://tse1.mm.bing.net/th/id/OIP.ixlE8qFgXs_yusEG7Bq7hgHaEo?w=300&h=187&c=7&o=5&pid=1.7',
            'https://tse3.mm.bing.net/th/id/OIP.gGF5T7OvQ-IpS3LRX4ybOwHaEo?w=282&h=180&c=7&o=5&pid=1.7',
            'https://tse2.mm.bing.net/th/id/OIP.UNqPJxVDLRXfIxY3KAtc9AHaEK?w=313&h=180&c=7&o=5&pid=1.7',
            'https://tse2.mm.bing.net/th/id/OIP.FosOwX6u5iJ_bJohelyJGwHaF1?w=239&h=188&c=7&o=5&pid=1.7',
            'https://tse3.mm.bing.net/th/id/OIP.EWIC5bWWjgsrpkBMp1c9YQAAAA?w=181&h=188&c=7&o=5&pid=1.7',
            'https://tse4.mm.bing.net/th/id/OIP.2fmcWX4zQaUSSEEDmJoaDAHaE7?w=266&h=180&c=7&o=5&pid=1.7',
            'https://tse4.mm.bing.net/th/id/OIP.ARi51jRAhl8Xtqas921iTwHaEK?w=267&h=180&c=7&o=5&pid=1.7',
            'https://tse4.mm.bing.net/th/id/OIP.ckhvKkD0-QJFPDCwAFvOSAHaEo?w=239&h=180&c=7&o=5&pid=1.7',

        ]

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Hamster Picture__**')
        .setFooter(`${message.author.username}`)
        .setColor('RANDOM')
        .setImage(pics[Math.floor(Math.random() * pics.length)])

        message.channel.send(embed)
    }}