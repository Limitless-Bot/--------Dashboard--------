const Discord = require("discord.js")

module.exports = {
    commands: ['pint'],
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: 'pint',
    callback: (message, arguments, text) => {

        const pics = [

            'https://images-na.ssl-images-amazon.com/images/I/71gX5RCaHDL._AC_SL1500_.jpg',
            'https://www.nme.com/wp-content/uploads/2020/03/pintbeer.jpg',
            'https://cdn-b.william-reed.com/var/wrbm_gb_hospitality/storage/images/publications/hospitality/morningadvertiser.co.uk/drinks/beer/brits-think-a-pint-is-60p-too-expensive/2835164-1-eng-GB/Brits-think-a-pint-is-60p-too-expensive_wrbm_large.jpg',
            'https://cdn-b.william-reed.com/var/wrbm_gb_hospitality/storage/images/publications/hospitality/morningadvertiser.co.uk/article/2020/03/13/what-is-the-difference-between-the-cheapest-and-most-expensive-pint-of-beer/3305131-1-eng-GB/What-is-the-difference-between-the-cheapest-and-most-expensive-pint-of-beer_wrbm_large.jpg',
            'https://m.media-amazon.com/images/I/51XVyIF2g3L.jpg',
            'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/pint-glass-of-beer-burazin.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/617kEzbJPPL._SL1080_.jpg',
            'https://www.latestfreestuff.co.uk/wp-content/uploads/2021/05/free-pint-of-beer.jpeg',
        ]

        let embed = new Discord.MessageEmbed()
            .setTitle('**__Pint Picture__**')
            .setFooter(`${message.author.username}`)
            .setColor('RANDOM')
            .setImage(pics[Math.floor(Math.random() * pics.length)])
    
            message.channel.send(embed)
        }}