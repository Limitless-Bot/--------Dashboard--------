const Discord = require("discord.js")

module.exports = {
    commands: ['chicken'],
    minArgs: 0,
    maxArgs: 0,
    category: 'Animal_1',
    expectedArgs: 'chicken',
    example: 'chicken',
    description: 'Shows a picture of a chicken.',
    callback: (message, arguments, text) => {

        const pics = [
            'https://i.pinimg.com/originals/c7/20/8e/c7208ea182e52a4024f2c47fab9b3f09.jpg',
            'https://i.pinimg.com/originals/cd/c2/8e/cdc28e9fbd6ec8c6b01d55cff4002f3b.jpg',
            'https://i.pinimg.com/originals/43/11/fd/4311fd380053ec88da3b210c9eced5a7.jpg',
            'https://www.peta.org/wp-content/uploads/2010/06/chicken2.jpg',
            'https://dineachook.com.au/product_images/uploaded_images/fluffy-chicken.jpg',
            'https://static.boredpanda.com/blog/wp-content/uploads/2019/07/adorable-chickens-tutus-1-5d26e37d60e0a__700.jpg',
            'https://wallpaperaccess.com/full/3758221.jpg',
            'https://static.comicvine.com/uploads/original/14/146064/3241710-chick.jpg',
            'https://i.ytimg.com/vi/uSUrLbgXiHo/sddefault.jpg',
            'https://cdn.shopify.com/s/files/1/0039/4647/9689/files/silkie-chicken-in-backyard.jpg',
            'https://i.pinimg.com/564x/75/58/31/7558314857ea55c866f9b2039e96c547.jpg',
            'https://www.mypetsname.com/wp-content/uploads/2019/04/Cute-Chicken-Names.jpg',
            'https://wallpaperaccess.com/full/2130940.jpg',
            'http://www.auditionsfree.com/content/user/2016/04/Cute-Chickens-cute-chickens-35819631-600-650.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/71alMD4VoqL._AC_SL1500_.jpg',
            'https://squeaksandnibbles.com/wp-content/uploads/2019/06/Chicken-names-SN-long.jpg',

        ]

        let embed = new Discord.MessageEmbed()
            .setTitle('**__Chicken Picture__**')
            .setFooter(`${message.author.username}`)
            .setColor('RANDOM')
            .setImage(pics[Math.floor(Math.random() * pics.length)])
    
            message.channel.send(embed)
        }}