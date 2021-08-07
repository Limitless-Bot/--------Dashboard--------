const Discord = require("discord.js")

module.exports = {
    commands: ['truth-or-dare', 't-d', 'truth-dare', 'dare-truth', 'dare-or-truth'],
    expectedArgs: 't-d',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
    
        var res = [

            '__**Truth:**__\n\n If you could be invisible, what is the first thing you would do?',
            '__**Truth:**__\n\n What is a secret you kept from your parents? ',
            '__**Truth:**__\n\n What is the most embarrassing music you listen to? ',
            '__**Truth:**__\n\n What is one thing you wish you could change about yourself? ',
            '__**Truth:**__\n\n Who is your secret crush?',
            '__**Truth:**__\n\n Who is the last person you creeped on social media? ',
            '__**Truth:**__\n\n When was the last time you wet the bed? ',
            '__**Truth:**__\n\n If a genie granted you three wishes, what would you ask for? ',
            '__**Truth:**__\n\n What is your biggest regret?',
            '__**Truth:**__\n\n Where is the weirdest place you\'ve ever gone to the bathroom?',
            '__**Truth:**__\n\n What is the most food you\'ve ever eaten in a single sitting?',
            '__**Truth:**__\n\n Which player would survive a zombie apocalypse and which would be the first to go?',
            '__**Truth:**__\n\n Reveal all the details of your first kiss.',
            '__**Truth:**__\n\n What excuse have you used before to get out plans with a friend?',
            '__**Truth:**__\n\n What\'s the longest you\'ve ever slept?',
            '__**Truth:**__\n\n Read the last thing you sent your best friend or significant other out loud.',
            '__**Truth:**__\n\n What\'s your biggest pet peeve?',
            '__**Truth:**__\n\n When was the last time you lied?',
            '__**Truth:**__\n\n What five things would you bring to a desert island?',
            '__**Truth:**__\n\n What\'s the most embarrassing thing you ever did on a date?',
            '__**Truth:**__\n\n What is the craziest pickup line you\'ve ever used?',
            '__**Truth:**__\n\n What animal do you think you most look like?',
            '__**Truth:**__\n\n How many selfies do you take a day?',
            '__**Truth:**__\n\n What is one thing you would stand in line for an hour for?',
            '__**Truth:**__\n\n When was the last time you cried?',
            '__**Truth:**__\n\n What\'s the longest time you\'ve ever gone without showering?',
            '__**Truth:**__\n\n What\'s the most embarrassing top-played song on your phone?',
            '__**Truth:**__\n\n What was your favorite childhood show?',
            '__**Truth:**__\n\n If you could be a fictional character for a day, who would you choose?',
            '__**Truth:**__\n\n What\'s your biggest fear?',
            '__**Truth:**__\n\n What\'s one silly thing you can\'t live without?',
            '__**Truth:**__\n\n What is the weirdest trend you\'ve ever participated in?',
            '__**Truth:**__\n\n If you could only listen to one song for the rest of your life, what would you choose?',
            '__**Truth:**__\n\n What person do you text the most?',
            '__**Truth:**__\n\n Have you ever been fired from a job?',
            '__**Truth:**__\n\n What is an instant deal breaker in a potential love interest?',
            '__**Truth:**__\n\n If you could only eat one thing for the rest of your life, what would you choose?',
            '__**Truth:**__\n\n What is the biggest lie you ever told your parents?',
            '__**Truth:**__\n\n What\'s the worst physical pain you\'ve ever experienced?',
            '__**Truth:**__\n\n Which player knows you the best?',
            '__**Truth:**__\n\n What\'s your favorite part of your body?',
            '__**Truth:**__\n\n What\'s the weirdest thing you\'ve ever eaten?',
            '__**Truth:**__\n\n Have you ever gone skinny dipping?',
            '__**Truth:**__\n\n Tell us about the worst date you\'ve ever been on?',
            '__**Truth:**__\n\n Who is your celebrity crush?',
            '__**Truth:**__\n\n What\'s the strangest dream you\'ve ever had?',
            '__**Truth:**__\n\n What are the top three things you look for in a boyfriend/girlfriend?',
            '__**Truth:**__\n\n What is your worst habit?',
            '__**Truth:**__\n\n How many stuffed animals do you own?',
            '__**Truth:**__\n\n What is your biggest insecurity?',

            '__**Dare:**__\n\n Do a free-style rap for the next minute.' ,
            '__**Dare:**__\n\n Let another person post a status on your behalf.' ,
            '__**Dare:**__\n\n Hand over your phone to another player who can send a single text saying anything they want to anyone they want.' ,
            '__**Dare:**__\n\n Let the other players go through your phone for one minute.' ,
            '__**Dare:**__\n\n Smell another player\'s armpit.' ,
            '__**Dare:**__\n\n Smell another player\'s bare foot.' ,
            '__**Dare:**__\n\n Eat a bite of a banana peel.' ,
            '__**Dare:**__\n\n Do an impression of another player until someone can figure out who it is.' ,
            '__**Dare:**__\n\n Say pickles at the end of every sentence you say until it\'s your turn again.' ,
            '__**Dare:**__\n\n Imitate a YouTube star until another player guesses who you\'re portraying.' ,
            '__**Dare:**__\n\n Act like a chicken until your next turn.' ,
            '__**Dare:**__\n\n Talk in a British accent until your next turn.' ,
            '__**Dare:**__\n\n Call a friend, pretend it\'s their birthday, and sing them Happy Birthday to You.' ,
            '__**Dare:**__\n\n Name a famous person that looks like each player in the room.' ,
            '__**Dare:**__\n\n Show us your best dance moves.' ,
            '__**Dare:**__\n\n Let another person draw a tattoo on your back with a permanent marker.' ,
            '__**Dare:**__\n\n Put on a blindfold and touch the other players\' faces until you can figure out who\'s who.' ,
            '__**Dare:**__\n\n Serenade the person to your right for a full minute.' ,
            '__**Dare:**__\n\n Do 20 squats.' ,
            '__**Dare:**__\n\n Let the other players redo your hairstyle.' ,
            '__**Dare:**__\n\n Dump out your purse, backpack, or pockets and do a show and tell of what\'s inside.' ,
            '__**Dare:**__\n\n Let the player to your right redo your makeup.' ,
            '__**Dare:**__\n\n Do a prank call on one of your family members.' ,
            '__**Dare:**__\n\n Let another player create a hat out of toilet paper — and you\'ve got to wear it for the rest of the game.' ,
            '__**Dare:**__\n\n Do a plank for a full minute.' ,
            '__**Dare:**__\n\n Let someone give you a wedgie.' ,
            '__**Dare:**__\n\n Put five cubes in your mouth (you can\'t chew them, you just have to let them melt—brrr).' ,
            '__**Dare:**__\n\n Bark like a dog.' ,
            '__**Dare:**__\n\n Draw your favorite movie and have the other person guess it (Pictionary-style).' ,
            '__**Dare:**__\n\n Repeat everything the person to your right says until your next turn.' ,
            '__**Dare:**__\n\n Demonstrate how you style your hair in the mirror (without actually using the mirror).' ,
            '__**Dare:**__\n\n Play air guitar for one minute.' ,
            '__**Dare:**__\n\n Empty a glass of cold water onto your head outside.' ,
            '__**Dare:**__\n\n Lay on the floor and act like a sizzling piece of bacon.' ,
            '__**Dare:**__\n\n In the next ten minutes, find a way to scare another player and make it a surprise.' ,
            '__**Dare:**__\n\n Lick a bar of soap.' ,
            '__**Dare:**__\n\n Eat a teaspoon of mustard.' ,
            '__**Dare:**__\n\n Show the most embarrassing photo on your phone' ,
            '__**Dare:**__\n\n Show the last five people you texted and what the messages said' ,
            '__**Dare:**__\n\n Let the rest of the group DM someone from your Instagram account' ,
            '__**Dare:**__\n\n Give a lap dance to someone of your choice' ,
            '__**Dare:**__\n\n Seductively eat a banana' ,
            '__**Dare:**__\n\n Try and make the group laugh as quickly as possible' ,
            '__**Dare:**__\n\n Tell everyone an embarrassing story about yourself' ,
            '__**Dare:**__\n\n Try to put your whole fist in your mouth' ,
            '__**Dare:**__\n\n Down your drink (responsibly)' ,
            '__**Dare:**__\n\n Attempt the first TikTok dance on your for you page' ,
            '__**Dare:**__\n\n Put on as many layers as possible in 60 seconds' ,
         
        



        ]

        let embed = new Discord.MessageEmbed()
        .setThumbnail('https://images-na.ssl-images-amazon.com/images/I/51l7y648pzL.png')
        .setFooter(`${message.author.username}`)
        .setColor('RANDOM')
        .setDescription(`\n ${res[Math.floor(Math.random() * res.length)]}`)

        message.channel.send(embed)

    }}