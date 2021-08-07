const Discord = require("discord.js")

module.exports = {
    commands: ['meme'],
    expectedArgs: 'meme',
    minArgs: 0,
    callback: (message, arguments, text) => {
    
        var res = [

            'https://filmdaily.co/wp-content/uploads/2020/07/cleanmeme-lede-1300x1244.jpg',
            'https://i.ytimg.com/vi/8NFsCDebQi0/maxresdefault.jpg',
            'https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2015/09/15/55f852974759c60c08243589_Golf-Meme-Baby.jpg.rend.hgtvcom.1280.1280.suffix/1573523197804.jpeg',
            'https://i.pinimg.com/736x/0d/4c/a9/0d4ca9ef0a9ab8eefbf0854e7e6b9ee6.jpg',
            'https://pd-beamliving-cd.beamliving.com/-/media/bu-to-ch/cat-meme-netflix-funny-1000x666.png',
            'https://www.rd.com/wp-content/uploads/2020/07/animalmemes-14.jpg',
            'https://media.socastsrm.com/wordpress/wp-content/blogs.dir/2269/files/2020/07/faee2f7d-91b8-4b23-8e56-9435bea96f1c.jpg',
            'https://cdn.memes.com/up/38006341604516575/i/1618538294962.jpg',
            'https://slapwank.com/wp-content/uploads/2019/08/mom-life-meme.jpg',
            'http://static.demilked.com/wp-content/uploads/2019/10/5da8209a0da15-8-5cac5c63d855a__700.jpg',
            'https://pbs.twimg.com/media/EwlKmC8XMAA1qE8.jpg',
            'https://cdn.shortpixel.ai/spai/w_924+q_lossy+ret_img+to_webp/https://www.everythingmom.com/wp-content/uploads/2020/04/Why-did-I-believe-mommy.jpg',
            'https://winkgo.com/wp-content/uploads/2019/05/funny-memes-best-01-720x527.jpg',
            'https://instoremag.com/wp-content/uploads/2020/01/doing-a-bit-of-everything-photo-u1.jpg',
            'https://youngentertainmentmag.com/wp-content/uploads/2018/08/hollywood1.png',
            'https://static.boredpanda.com/blog/wp-content/uploads/2021/04/hilarious-introvert-memes-fb34-png__700.jpg',
            'https://bestlifeonline.com/wp-content/uploads/2020/07/Hello-This-Is-Dog.jpg',
            'https://www.yourtango.com/sites/default/files/styles/header_slider/public/image_blog/workmemes.jpg?itok=3yFVIkG9',
            'https://content.linkedin.com/content/dam/business/talent-solutions/global/en_us/blog/2015/05/4-workhumore.jpg',
          

        ]

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Here is a meme!__**')
        .setImage(res[Math.floor(Math.random() * res.length)])
        .setFooter(`${message.author.username}`)
        .setColor('RANDOM')

        message.channel.send(embed)

    }}