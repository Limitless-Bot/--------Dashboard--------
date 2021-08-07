const Discord = require("discord.js")

module.exports = {
    commands: ['rhino'],
    expectedArgs: 'rhino',
    minArgs: 0,
    maxArgs: 0,
    category: 'Animal_2',
    expectedArgs: 'rhino',
    example: 'rhino',
    description: 'Shows a picture of a rhino.',
    callback: (message, arguments, text) => {

        const pics = [
            'http://c.files.bbci.co.uk/2F94/production/_110208121_babyrhino-czslwhipsnadezoo-14.jpg',
            'https://i.pinimg.com/originals/58/ac/d7/58acd772e5e3aabbe60bc14479b3c7a0.jpg',
            'https://cdn.mos.cms.futurecdn.net/kRfNcFwQKMLncamS4toZJR-320-80.jpg',
            'https://i2-prod.walesonline.co.uk/incoming/article10319938.ece/ALTERNATES/s1200c/SJP_ECH_221015Rhino_0127089JPGJPG.jpg',
            'https://www.chicagotribune.com/resizer/5NBaO1phkyz48jPpznyMY7gZwao=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/Y77HRMNTDRBQFHHYJVFGLIVOIU.jpg',
            'https://i.pinimg.com/originals/da/d6/25/dad6251db8f0a1e29c0ad671401a2431.jpg',
            'https://i.ytimg.com/vi/lm2FBAr1Nek/maxresdefault.jpg',
            'https://www.rd.com/wp-content/uploads/2019/08/Cute-baby-white-rhino-covered-in-mud-running-across-an-open-field-scaled.jpg',
            'https://media1.fdncms.com/clevescene/imager/u/original/17283614/29060982_10160241352140002_8535509068911926749_o.jpg',
            'https://i.redd.it/lejirq7o1jl61.jpg',
        ]

        let embed = new Discord.MessageEmbed()
            .setTitle('**__Rhino Picture__**')
            .setFooter(`${message.author.username}`)
            .setColor('RANDOM')
            .setImage(pics[Math.floor(Math.random() * pics.length)])
    
            message.channel.send(embed)
        }}