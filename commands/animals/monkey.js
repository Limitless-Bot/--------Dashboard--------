const Discord = require("discord.js")

module.exports = {
    commands: ['monkey'],
    expectedArgs: 'monkey',
    minArgs: 0,
    maxArgs: 0,
    category: 'Animal_2',
    expectedArgs: 'monkey',
    example: 'monkey',
    description: 'Shows a picture of a monkey.',
    callback: (message, arguments, text) => {

        const pics = [
            'https://i.pinimg.com/originals/13/30/7b/13307b96dbb6748a0ba3c8fea056d32f.jpg',
            'https://cdn.pixabay.com/photo/2020/07/21/01/33/cute-5424776_960_720.jpg',
            'https://cdn.vox-cdn.com/thumbor/7pdBR8ISzyhr7_10A9P9jSK3dP4=/0x0:3024x4032/1200x0/filters:focal(0x0:3024x4032):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10090637/Zhongzhong_and_Huahua_1.jpg',
            'https://wallpapercave.com/wp/wbUa7bh.jpg',
            'https://i.pinimg.com/736x/ee/32/c8/ee32c8ca5b0d3dc6ba5fb6e88bec06f3.jpg',
            'https://pbs.twimg.com/media/EcMhOYVXQAIscpK.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/61j4%2BqHyR%2BL._AC_SY741_.jpg',
            'https://i.ytimg.com/vi/1ZJcfsUA-Xs/hqdefault.jpg',
            'https://cdn.mos.cms.futurecdn.net/5ANaiJQ6f8LezbBUG5dT36-320-80.jpg',
            'https://numeralpaint.com/wp-content/uploads/2020/08/cute-baby-monkey-paint-by-numbers.jpg',
            'https://i.pinimg.com/originals/1e/fa/a2/1efaa2e7892daf3998d8a22956a98639.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/d/df/Cute_Monkey_cropped.jpg',
            'https://www.crushpixel.com/big-static13/preview4/cute-monkey-lives-natural-forest-1230551.jpg',
            'https://cdn.pixabay.com/photo/2019/04/11/23/30/cute-4120944_960_720.jpg',
            'https://animalhype.com/wp-content/uploads/2020/04/monkey-names.jpeg',
            'https://wallpaperaccess.com/full/368577.jpg',

        ]

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Monkey Picture__**')
        .setFooter(`${message.author.username}`)
        .setColor('RANDOM')
        .setImage(pics[Math.floor(Math.random() * pics.length)])

        message.channel.send(embed)
    }}