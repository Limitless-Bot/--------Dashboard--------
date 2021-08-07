const Discord = require("discord.js")

module.exports = {
    commands: ['lion'],
    expectedArgs: 'lion',
    minArgs: 0,
    maxArgs: 0,
    category: 'Animal_2',
    expectedArgs: 'lion',
    example: 'lion',
    description: 'Shows a picture of a lion.',
    callback: (message, arguments, text) => {

        const pics = [
            'https://media.gettyimages.com/photos/affectionate-lion-cubs-in-nature-picture-id1204777164?k=6&m=1204777164&s=612x612&w=0&h=rl84xztjgXBpnnyhIj55sl_1GFGQwfLbIMCczs09Y54=',
            'https://media.gettyimages.com/photos/lion-and-cub-in-field-closeup-picture-id200214004-001?k=6&m=200214004-001&s=612x612&w=0&h=_2oGf5CdbXNhND7OcoCKiu96MAjxkqrNngujOapDJ5w=',
            'https://media.gettyimages.com/photos/lion-cat-costume-picture-id517073672?k=6&m=517073672&s=612x612&w=0&h=EmWV0FVd3NuqggsYOOpcS6qr827ajtfs58yR6jchG9c=',
            'https://media.gettyimages.com/photos/lioness-with-cubs-lying-on-grass-kenya-picture-id200328654-001?k=6&m=200328654-001&s=612x612&w=0&h=LJNucpivjoQ5gHMSjeo1JRoPPmDQ5WE0VBrGJ6i7xbE=',
            'https://media.gettyimages.com/photos/two-lion-cubs-playing-mpumalanga-south-africa-picture-id890884292?k=6&m=890884292&s=612x612&w=0&h=I7jpsTugMiCh-MZIGUo-9UW0I1oGQ7Wkyu8fVPjsonw=',
            'https://media.gettyimages.com/photos/lion-cub-against-white-background-close-up-picture-idsb10068897b-001?k=6&m=sb10068897b-001&s=612x612&w=0&h=P8_kiZCT97Ku9mUbECVX9ZzLMiAgemGyeg15AqA1B6I=',
            'https://media.gettyimages.com/photos/playful-lion-cubs-with-their-mother-in-the-wild-picture-id1226877924?k=6&m=1226877924&s=612x612&w=0&h=9YeSCpvJOd5ZaJgJu4YI_t-uTaWRUPwVIQpHnAWtODg=',
            'https://media.gettyimages.com/photos/lion-cub-sits-in-a-relaxed-pose-picture-id1219601739?k=6&m=1219601739&s=612x612&w=0&h=MysveOGR6BJ82N5dWFcg3xwbSlj6RGbrJKcMq7RmJ_Y=',
            'https://media.gettyimages.com/photos/lion-cub-with-lioness-picture-id1204778472?k=6&m=1204778472&s=612x612&w=0&h=vKvQrFFVz-bWNRZJH2btDlxN-GEE-d7_ALX8YNtVLPU=',
        ]

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Lion Picture__**')
        .setFooter(`${message.author.username}`)
        .setColor('RANDOM')
        .setImage(pics[Math.floor(Math.random() * pics.length)])

        message.channel.send(embed)
    }}