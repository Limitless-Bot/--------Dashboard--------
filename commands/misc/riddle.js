const Discord = require("discord.js")

module.exports = {
    commands: ['riddle'],
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: 'riddle',
    callback: (message, arguments, text) => {
    
        var res = [

            'Riddle: What has to be broken before you can use it?\n\nSolution: ||An egg||',
            'Riddle: The more you take, the more you leave behind. What am I?\n\nAnswer: ||Footsteps||',
            'Riddle: If two’s company, and three’s a crowd, what are four and five?\n\nSolution: ||Nine!||',
            'Riddle: After a train crashed, every single person died. Who survived?\n\nSolution: ||All of the couples||.',
            'Riddle: A boy and his father get into a car accident. When they arrive at the hospital, the doctor sees the boy and exclaims “that’s my son!” How can this be?\n\nSolution: ||The doctor is the boy’s mother.||',
            'Riddle: Four legs up, four legs down, soft in the middle, Hard all around.\n\nAnswer: ||Bed||',
            'Riddle: What can you catch but not throw?\n\nSolution: ||A cold!||',
            'Riddle: What begins with T, finishes with T, and has T in it?\n\nSolution: ||A teapot||',
            'Riddle: If a brother, his sister, and their dog weren’t under an umbrella, why didn’t they get wet?\n\nSolution: ||It wasn’t raining.||',
            'Riddle: I am so simple, that I can only point yet I guide men all over the world.\n\nSolution: ||Compass||',
            'Riddle: What goes up but never comes back down?\n\nSolution: ||Your age!||',
            'Riddle: What five-letter word becomes shorter when you add two letters to it?\n\nSolution: ||Shorter. (Short + ‘er’)||',
            'Riddle: What travels around the world but stays in one spot?\n\nSolution: ||A stamp.||',
            'Riddle: When things go wrong, what can you always count on?\n\nSolution: ||Your fingers.||',
            'Riddle: Mr. Blue lives in the Blue house. Mrs. Yellow lives in the Yellow House. Mr. Orange lives in the orange house. Who lives in the White House?\n\nAnswer: ||The President||',
            'Riddle: A word I know, six letters it contains, remove one letter and 12 remains, what is it?\n\nSolution: ||Dozens.||',
            'Riddle: What is full of holes but still holds water?\n\nSolution: ||A sponge.||',
            'Riddle: How many letters are there in the English alphabet?\n\nSolution: ||18: 3 in ‘the’, 7 in ‘English,’ and 8 in ‘alphabet.’||',
            'Riddle: If a red house is made of red bricks, and a yellow house is made of yellow bricks, what is a greenhouse made of?\n\nSolution: ||Glass, all greenhouses are made of glass.||',
            'Riddle: What begins with an E but only has one letter?\n\nSolution: ||An envelope.||',

        ]

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Here is a Ridde, Can You Solve it??__**')
        .setThumbnail('https://logos.flamingtext.com/City-Logos/Riddle-Logo.png')
        .setFooter(`${message.author.username}`)
        .setColor('RANDOM')
        .setDescription(`\n ${res[Math.floor(Math.random() * res.length)]}`)

        message.channel.send(embed)

    }}
