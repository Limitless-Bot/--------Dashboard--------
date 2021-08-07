const Discord = require("discord.js")

module.exports = {
    commands: ['potato'],
    expectedArgs: 'potato',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {

        const pics = [
            'https://www.irishtimes.com/polopoly_fs/1.3967277.1564062363!/image/image.jpg_gen/derivatives/box_620_330/image.jpg',
            'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/db/db919fe6cbe6e29306bcdaafe7b11a2fde39878a_full.jpg',
            'https://i.imgur.com/KayrASQ.png',
            'https://static.wixstatic.com/media/bbfcf4_c4381f4bb5a94325b6357bd22f4589e6~mv2.gif',
            'https://media.giphy.com/media/2u9HmOf6BmqwU/giphy.gif',
            'https://ih1.redbubble.net/image.1312459059.7662/st,small,507x507-pad,600x600,f8f8f8.jpg',
            'https://static.wixstatic.com/media/bbfcf4_5ff8af7b2e144208bb1b6a1ec7814438~mv2.gif',
            'https://i.pinimg.com/236x/bb/f4/47/bbf44751dc48ab0712403f2ebf1be6a9.jpg',
            'https://www.pngfind.com/pngs/m/55-556995_cartoon-potato-png-potato-cartoon-transparent-background-png.png',
            'https://library.kissclipart.com/20191014/lyq/kissclipart-clip-art-cartoon-potato-fictional-character-solanu-a066b2e3f56e2c68.png',
            'https://cdn.pixabay.com/photo/2020/04/13/20/42/potato-5039995__340.png',
            'https://i.pinimg.com/originals/a3/86/33/a3863345acdb99ed26405e82fc8cfb5f.png',
            'https://www.clipartkey.com/mpngs/m/4-41440_potato-clipart-for-download-free-potato-cartoon.png',
            'https://www.jing.fm/clipimg/detail/168-1682973_potato-tuber-vegetable-free-picture-potato-png-cartoon.png',
            'https://storage.needpix.com/rsynced_images/jacket-potato-2906023_1280.png',
            'https://freepikpsd.com/wp-content/uploads/2020/04/cartoon-potato-png-Images-Free-Transparent.png',
            'https://www.jing.fm/clipimg/full/4-43372_potato-cartoon-character-potato-clipart-png.png',
            'https://img.favpng.com/2/1/23/potato-cartoon-food-drawing-png-favpng-AH2eJsZqnUdPcWSZScZQzgsMw.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/61zaP1tpAiL._AC_SL1145_.jpg',
            'https://w7.pngwing.com/pngs/46/365/png-transparent-french-fries-potato-chip-illustration-cartoon-potato-chips-cartoon-character-food-text.png',
            'https://image.pngaaa.com/693/1034693-middle.png',
            'https://www.pngfind.com/pngs/m/522-5226699_potato-clipart-derpy-cartoon-hd-png-download.png',

        ]

        let embed = new Discord.MessageEmbed()
            .setTitle('**__Potato Picture__**')
            .setFooter(`${message.author.username}`)
            .setColor('RANDOM')
            .setImage(pics[Math.floor(Math.random() * pics.length)])
    
            message.channel.send(embed)
        }}