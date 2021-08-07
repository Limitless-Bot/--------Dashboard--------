const Discord = require("discord.js")

module.exports = {
    commands: ['coke', 'cola', 'coca-cola'],
    expectedArgs: 'coke',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {

        const pics = [
            'https://simc-wire.com/wp-content/uploads/2016/02/Coca-Cola.png',
            'https://thumb.approvedfood.co.uk/thumbs/75/1000/1000/1/src_images/coca_cola_original_taste_330ml_2.jpg',
            'https://assets.iceland.co.uk/i/iceland/Coca_Cola_500m_Original_218.jpg?$pdpzoom$',
            'https://www.theconstructionindex.co.uk/assets/news_articles/2013/07/1372837240_03jul13-mott-india-coca-cola-large.jpg',
            'https://i.insider.com/550776deecad04151818acf7',
            'https://owo.in/wp-content/uploads/2020/10/Coca-Cola-Bottle.png',
            'https://i1.wp.com/www.thecannifornian.com/wp-content/uploads/2018/09/Coca-Cola-Cannabis.jpg?w=5403&crop=0%2C0px%2C100%2C3372px&ssl=1',
            'https://www.stack3d.com/wp-content/uploads/2019/05/coca-cola-energy-review-1.jpg',
            'http://www.coca-cola.com.my/content/dam/journey/my/en/private/our-company/Why-Work-With-Us.jpg',
            'https://blacksquarelab.co/wp-content/uploads/2019/12/coca-cola-2.jpg',
            'https://www.coca-colaindia.com/content/dam/journey/in/en/private/stories/history/story-image-journey.jpg',
            'https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/full/public/2020/01/30/shares-of-coca-cola-rose-as-it-reported.jpg',
            'http://www.winwallpapers.net/w1/2015/06/Always-Coca-Cola.jpg',
            'https://business.inquirer.net/files/2018/02/coca-cola.jpg',
            'https://media.marketrealist.com/brand-img/LakIlOF7b/0x0/uploads/2019/10/AdobeStock_285451689_Editorial_Use_Only.jpeg',
            'https://www.southernsavers.com/wp-content/uploads/2018/01/coca-cola-products.png'
        ]

        let embed = new Discord.MessageEmbed()
            .setTitle('**__Coca Cola Picture__**')
            .setFooter(`${message.author.username}`)
            .setColor('RANDOM')
            .setImage(pics[Math.floor(Math.random() * pics.length)])
    
            message.channel.send(embed)
        }}