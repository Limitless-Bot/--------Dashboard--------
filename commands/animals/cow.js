const Discord = require("discord.js")

module.exports = {
    commands: ['cow'],
    expectedArgs: 'cow',
    minArgs: 0,
    maxArgs: 0,
    category: 'Animal_1',
    expectedArgs: 'cow',
    example: 'cow',
    description: 'Shows a picture of a cow.',
    callback: (message, arguments, text) => {

        const pics = [
            'https://64.media.tumblr.com/709acf5805b63bf412dd5cf8d6e34803/tumblr_oplgjdcYJl1sgqqono1_500.jpg',
            'https://img.buzzfeed.com/buzzfeed-static/static/2017-10/19/14/asset/buzzfeed-prod-fastlane-03/sub-buzz-2288-1508439279-2.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto',
            'https://img.buzzfeed.com/buzzfeed-static/static/2017-10/19/14/asset/buzzfeed-prod-fastlane-02/sub-buzz-18230-1508439294-6.jpg?downsize=600:*&output-format=auto&output-quality=auto',
            'https://img.buzzfeed.com/buzzfeed-static/static/2017-10/19/14/asset/buzzfeed-prod-fastlane-01/sub-buzz-16485-1508439318-8.jpg?downsize=600:*&output-format=auto&output-quality=auto',
            'https://img.buzzfeed.com/buzzfeed-static/static/2017-10/19/14/asset/buzzfeed-prod-fastlane-01/sub-buzz-16894-1508439343-1.jpg?downsize=600:*&output-format=auto&output-quality=auto',
            'https://64.media.tumblr.com/65099a7a8eb5eaee95182a59c657ac2c/tumblr_ov3hwobNaA1s5ggcto1_500.png',
            'https://img.buzzfeed.com/buzzfeed-static/static/2017-10/19/14/asset/buzzfeed-prod-fastlane-03/sub-buzz-2788-1508439364-1.jpg?downsize=600:*&output-format=auto&output-quality=auto',
            'https://img.buzzfeed.com/buzzfeed-static/static/2017-10/20/12/asset/buzzfeed-prod-fastlane-02/sub-buzz-32531-1508518610-1.jpg?downsize=600:*&output-format=auto&output-quality=auto',
            'https://64.media.tumblr.com/e2ee6fb6de0d246bcaca538e45b2167a/tumblr_ora7qurGdJ1r4x5j7o1_500.jpg',
            'https://img.buzzfeed.com/buzzfeed-static/static/2017-10/19/14/asset/buzzfeed-prod-fastlane-01/sub-buzz-16960-1508439383-2.jpg?downsize=600:*&output-format=auto&output-quality=auto',
            'https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2019/07/cow-friends.jpg?resize=640%2C360&ssl=1',
            'https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2019/07/cows-kissing.jpg?resize=500%2C333&ssl=1',
            'https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2019/07/cow-sticking-tongue-out.jpg?resize=500%2C333&ssl=1',
            'https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2019/07/up-close-cow.jpg?resize=500%2C360&ssl=1',
            'https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2019/07/cow-being-pet-on-head.jpg?resize=500%2C375&ssl=1',

        ]

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Cow Picture__**')
        .setFooter(`${message.author.username}`)
        .setColor('RANDOM')
        .setImage(pics[Math.floor(Math.random() * pics.length)])

        message.channel.send(embed)
    }}