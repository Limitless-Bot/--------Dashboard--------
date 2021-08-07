const Discord = require("discord.js")

module.exports = {
    commands: ['dinosaur'],
    expectedArgs: 'dinosaur',
    minArgs: 0,
    maxArgs: 0,
    category: 'Animal_1',
    expectedArgs: 'dinosaur',
    example: 'dinosaur',
    description: 'Shows a picture of a dinosaur.',
    callback: (message, arguments, text) => {

        const pics = [
            'https://cdn.pixabay.com/photo/2018/02/13/01/43/dinosaur-3149580__340.png',
            'https://cdn.pixabay.com/photo/2014/03/10/16/03/tyrannosaurus-rex-284554__340.jpg',
            'https://cdn.pixabay.com/photo/2019/02/01/14/24/landscape-3969074__340.jpg',
            'https://cdn.pixabay.com/photo/2016/04/05/23/00/dinosaur-1310676__340.jpg',
            'https://cdn.pixabay.com/photo/2013/11/20/09/36/attacking-213676__340.jpg',
            'https://cdn.pixabay.com/photo/2021/04/05/10/30/woman-6152951__340.jpg',
            'https://cdn.pixabay.com/photo/2015/07/22/11/51/tyrannosaurus-855188__340.jpg',
            'https://cdn.pixabay.com/photo/2015/09/25/19/02/dinosaur-958017__340.jpg',
            'https://cdn.pixabay.com/photo/2015/09/25/19/01/dinosaur-958005__340.jpg',
            'https://cdn.pixabay.com/photo/2017/03/22/08/07/singapore-zoo-2164309__340.jpg',
            'https://cdn.pixabay.com/photo/2019/10/14/12/57/fantasy-4548826__340.jpg',
            'https://cdn.pixabay.com/photo/2015/09/25/19/01/dinosaur-958004__340.jpg',

        ]

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Dinosaur Picture__**')
        .setFooter(`${message.author.username}`)
        .setColor('RANDOM')
        .setImage(pics[Math.floor(Math.random() * pics.length)])

        message.channel.send(embed)
    }}