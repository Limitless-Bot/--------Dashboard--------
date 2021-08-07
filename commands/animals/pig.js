const Discord = require("discord.js")

module.exports = {
    commands: ['pig'],
    expectedArgs: 'pig',
    minArgs: 0,
    maxArgs: 0,
    category: 'Animal_2',
    expectedArgs: 'pig',
    example: 'pig',
    description: 'Shows a picture of a pig.',
    callback: (message, arguments, text) => {

        const pics = [

            'https://www.thesprucepets.com/thmb/wvHRYO2r5mhNIfqh6xirtLAUTNg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/front-view-closeup-of-black-and-white-spotted-piglet-on-hay-on-a-sunny-day-881477548-5c8ba7b746e0fb000187a286.jpg',
            'https://www.thesprucepets.com/thmb/VQrCI_iVLyedYqMWPDpf5Cn473w=/1554x0/filters:no_upscale():max_bytes(150000):strip_icc()/piglet-56158469-5c8ba7dc46e0fb0001770031.jpg',
            'https://www.thesprucepets.com/thmb/UfKbswiloqpcUH1IjZNx6UIQKno=/2094x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-pig-702612173-5c8ba81146e0fb00016ee068.jpg',
            'https://www.thesprucepets.com/thmb/QuygWTf2cAISPTBghsWDERDgtas=/2119x0/filters:no_upscale():max_bytes(150000):strip_icc()/pigs-in-farm-688935901-5c8ba7fac9e77c0001ac181c.jpg',
            'https://www.thesprucepets.com/thmb/hq_gdrAkICZDFnVbiZmiUBvXnA4=/2178x0/filters:no_upscale():max_bytes(150000):strip_icc()/little-piggy-987544824-5c8ba8b7c9e77c00014a9d22.jpg',
            'https://www.thesprucepets.com/thmb/OPC93AdZHwjYWOWsh6-D9EnH8lQ=/1560x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-a-baby-pig-683817525-5c8ba9d846e0fb0001555818.jpg',
            'https://www.thesprucepets.com/thmb/_5b8f1IbeeSlk32YcGAhlp6uRpQ=/2538x0/filters:no_upscale():max_bytes(150000):strip_icc()/pigs-fighting-over-carrot-846514438-5c8baa7946e0fb000146ace2.jpg',
            'https://www.thesprucepets.com/thmb/uXA-WSWFz7x4RkuFarYmuPZsoQQ=/1950x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-pig-race-is-on-871564996-5c8bae50c9e77c00010e9669.jpg',
            'https://www.thesprucepets.com/thmb/-gOloSFWN-EL722VyOPjU5U2feo=/2566x0/filters:no_upscale():max_bytes(150000):strip_icc()/two-long-haired-pigs-grazing-in-a-pasture-520241423-5c8bae12c9e77c0001ac1820.jpg',
            'https://www.thesprucepets.com/thmb/WPE4MOrH4JTm7golM1qP7bArEeA=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc()/mother-pig-watching-piglets-654510950-5c8baeeec9e77c00010e966a.jpg',
            'https://www.thesprucepets.com/thmb/PSCyU1AKAR6ylRU0A0Awr8YSpfk=/1650x0/filters:no_upscale():max_bytes(150000):strip_icc()/two-pigs-swimming-in-the-bahamas-507961772-5c8baf5346e0fb000146ace4.jpg',
            'https://www.thesprucepets.com/thmb/u3FULeSDa4USuZyZwrVMOzuha0k=/1508x0/filters:no_upscale():max_bytes(150000):strip_icc()/five-piglets-157339366-5c8baefb46e0fb00016ee06b.jpg',
            'https://www.thesprucepets.com/thmb/wHlJmHbJBUT3gsjmLGj14Z2fDM4=/1530x0/filters:no_upscale():max_bytes(150000):strip_icc()/piglets-in-field-103576621-5c8bae8c46e0fb00014a96a1.jpg',
        ]

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Pig Picture__**')
        .setFooter(`${message.author.username}`)
        .setColor('RANDOM')
        .setImage(pics[Math.floor(Math.random() * pics.length)])

        message.channel.send(embed)
    }}