const Discord = require("discord.js")

module.exports = {
    commands: ['rabbit'],
    expectedArgs: 'rabbit',
    minArgs: 0,
    maxArgs: 0,
    category: 'Animal_2',
    expectedArgs: 'rabbit',
    example: 'rabbit',
    description: 'Shows a picture of a rabbit.',
    callback: (message, arguments, text) => {

        const pics = [
        'https://www.rd.com/wp-content/uploads/2020/04/GettyImages-694542042-e1586274805503.jpg',
        'https://www.rd.com/wp-content/uploads/2020/04/GettyImages-153016104-e1586356775279.jpg',
        'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-476744133-scaled.jpg?resize=1536,1022',
        'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1161350775-scaled.jpg?resize=1536,1024',
        'https://www.rd.com/wp-content/uploads/2020/04/GettyImages-492362561-e1586268905784.jpg',
        'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-915092866-scaled.jpg?resize=1536,1536',
        'https://www.rd.com/wp-content/uploads/2020/04/GettyImages-940114732-e1586269313284.jpg',
        'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-638880084-scaled.jpg?resize=1536,1177',
        'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-800371968.jpg?resize=1536,1168',
        'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1282400829-scaled.jpg?resize=1536,1025',
        'https://www.rd.com/wp-content/uploads/2020/04/GettyImages-87788207-e1586269868826.jpg',
        'https://www.rd.com/wp-content/uploads/2020/04/GettyImages-145926064-e1586274393540.jpg',
        'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-687742196-scaled.jpg?resize=1536,797',
        'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-953005498-scaled.jpg?resize=1536,1152',
        'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1155953827-scaled.jpg?resize=1536,1024',
        'https://www.rd.com/wp-content/uploads/2020/04/GettyImages-936685742-e1586275077936.jpg',
        'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-161760539-scaled.jpg?resize=1536,1018',
    ]

    let embed = new Discord.MessageEmbed()
        .setTitle('**__Rabbit Picture__**')
        .setFooter(`${message.author.username}`)
        .setColor('RANDOM')
        .setImage(pics[Math.floor(Math.random() * pics.length)])

        message.channel.send(embed)
    }}