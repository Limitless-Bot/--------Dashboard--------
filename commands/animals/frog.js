const Discord = require("discord.js")

module.exports = {
    commands: ['frog'],
    expectedArgs: 'frog',
    minArgs: 0,
    maxArgs: 0,
    category: 'Animal_2',
    expectedArgs: 'frog',
    example: 'frog',
    description: 'Shows a picture of a frog.',
    callback: (message, arguments, text) => {

        const pics = [
            'https://cdn.britannica.com/84/206384-131-207CC735/Javan-gliding-tree-frog.jpg',
            'https://images.newscientist.com/wp-content/uploads/2020/09/22145012/big-frog-eyes.jpg',
            'https://static01.nyt.com/images/2019/04/02/science/28SCI-ZIMMER1/28SCI-ZIMMER1-superJumbo.jpg',
            'https://static.scientificamerican.com/sciam/cache/file/41DF7DA0-EE58-4259-AA815A390FB37C55_source.jpg',
            'https://www.nhm.ac.uk/content/dam/nhmwww/discover/frog-eyes-evolution/frog-eyes-chubby-frog-flower-full-width.jpg.thumb.1160.1160.jpg',
            'https://cdn.mos.cms.futurecdn.net/AZoZT5cVZZNM7CvPctuDbf-1200-80.jpg',
            'https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2.jpg',
            'https://www.thesprucepets.com/thmb/lebTbFgP_kUDX_KefarQNaCn6MY=/1500x1500/smart/filters:no_upscale()/GettyImages-175174320-581251b65f9b58564ccaffe2.jpg',
            'https://www.paigntonzoo.org.uk//userfiles/news/2019%2003%20PZ%20Thao%20whipping%20frogs%20small.jpg',
            'https://www.aquariumofpacific.org/images/exhibits/Magnificent_Tree_Frog_900.jpg',
            'https://www.nhm.ac.uk/content/dam/nhmwww/discover/jeff-frog-vision-field-work/Callimedusa_lemur_credit_Dr_Christian_Cox-%20full-width.jpg.thumb.1160.1160.jpg',
            'https://i.natgeofe.com/n/96105efd-6c5e-4771-8d14-55bcbebd4181/01-new-pinocchio-frog-nationalgeographic_1311899.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/e/e3/Cochranella_susatamai03.jpg',
            'https://ichef.bbci.co.uk/news/976/cpsprodpb/1850B/production/_106959599_pa-12399914.jpg',


        ]

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Frog Picture__**')
        .setFooter(`${message.author.username}`)
        .setColor('RANDOM')
        .setImage(pics[Math.floor(Math.random() * pics.length)])

        message.channel.send(embed)
    }}
