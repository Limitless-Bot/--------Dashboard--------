const Discord = require("discord.js")

module.exports = {
    commands: ['joke'],
    expectedArgs: 'joke',
    minArgs: 0,
    callback: (message, arguments, text) => {
    
        var res = [
            'Q: How do bees get to school?\n\nA: ||The school-buzz!||',
            'Q: What do you call cheese that isn’t yours?\n\nA: ||||Nacho cheese!||||',
            'Q: What do they teach elves when they are in school\n\nA: ||The elf-abet!?||',
            'Q: What do librarians take with them when they go on a fishing trip?\n\nA: ||Bookworms!||',
            'Q: What is a cow’s favorite holiday of the year?\n\nA: ||Moo-years day!||',
            'Q: What did the light bulb say to his wife on Valentine’s Day?\n\nA: ||I love you watts and watts!||',
            'Q: How does the Easter bunny stay in such good shape all year long?\n\nA: ||Lots and lots of eggsercise!||',
            'Q: What do they call a fake stone in Ireland?\n\nA: ||A sham rock!||',
            'Q: Why does Santa Claus like to slide down the chimney?\n\nA: ||It really seems to soot him.||',
            'Q: What is Tarzan’s favorite Christmas song to sing?\n\nA: ||Jungle bells, duh!||',
            'Q: Why do dogs tend to hang up their own stockings at Christmas?\n\nA: ||They think Santa Paws is coming to town!||',
            'Q: What kind of key is bad at opening a door?\n\nA: ||A tur-key!||',
            'Q: What type of flight does a turkey take home?\n\nA: ||Bird class!||',
            'Q: What happened to the turkey when he got into a fistfight?\n\nA: ||He got the stuffing knocked right out of him!||',
            'Q: What kind of fruit do scarecrows eat?\n\nA: ||Strawberries!||',
            'Q: What did the ghost say to his crush?\n\nA: ||You’re bootiful!||',
            'Q: What do witches like to eat when they make bagels?\n\nA: ||Scream cheese!||',
            'Q: What is a witch’s favorite subject in school?\n\nA: ||Spell-ing class!||',
            'Q: What do you get when a snowman crosses a vampire.\n\nA: ||Frost-bite!||',
            'Q: Why would someone smear peanut butter on the road?\n\nA: ||To compliment a traffic jam!||',
            'Q: Why did the banana go visit his doctor?\n\nA: ||He wasn’t peeling very well!||',
            'Q: When is the best time to go to the dentist?\n\nA: ||Tooth-hurty!||',
            'Q: What should you do when an elephant sits on your fence?\n\nA: ||Get a new one!||',
            'Q: What do you call a sleeping bull?\n\nA: ||A bull dozer!||',
            'Q: What type of dog keeps track of time?\n\nA: ||A watch dog!||',
            'Q: Why are fish so smart?\n\nA: ||Because they live in schools!||',
            'Q: Why did the burglar take a shower?\n\nA: ||To make a clean getaway!||',
            'Q: Can you make a tissue dance?\n\nA: ||Sure, you just put a little boogie into it!||',
            'Q: What do pirates pay for earrings?\n\nA: ||About a buck an ear! (Buccaneer)||',
            'Q: What kind of bean gets super jealous of actual beans?\n\nA: ||A jelly bean!||',
            'Q: What kind of lion never roars?\n\nA: ||A dandelion!||',
            'Q: What do you call a cow that jumps around on a trampoline?\n\nA: ||A milk shake!||',
            'Q: Why are graveyards so noisy?\n\nA: ||Because of all the coffin!||',
            'Q: Why didn’t the skeleton cross the road?\n\nA: ||He didn’t have the guts to do it!||',
            'Q: What runs but cannot walk?\n\nA: ||A river!||',
            'Q: What gets wetter the more than it dries?\n\nA: ||A towel!||',
            'Q: What fish is most likely to get famous?\n\nA: ||A star-fish!||',
            'Q: How does the ocean say it’s goodbyes?\n\nA: ||It waves!||',
            'Q: What kind of phone can’t be used to call a person?\n\nA: ||A xylophone!||',
            'Q: What do skeletons say before diving into a meal?\n\nA: ||Bone appetite!||',
            'Q: Why can’t Elsa have a balloon?\n\nA: ||Because she’ll let it go!||',
            'Q: Where do pencils go during summer vacation?\n\nA: ||Pencil-vania!||',
            'Q: Why did the pony skip out on singing karaoke?\n\nA: ||He was a little hoarse!||',
            'Q: How do you fix a broken jack-o-lantern?\n\nA: ||With a pumpkin patch of course!||',
            'Q: What do you call a fake noodle?\n\nA: ||An impasta!||',
            'Q: What kind of award does a dentist receive?\n\nA: ||A plaque!||',
            'Q: What has many teeth, but does not bite?\n\nA: ||A zipper.||',
            'Q: What kind of monster loves to dance?\n\nA: ||A boogieman!||',

        ]

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Here is a Joke!__**')
        .setThumbnail('https://www.jokescoff.com/wp-content/uploads/2015/12/whatsapp-funny-jokes-with-emoji.jpg')
        .setFooter(`${message.author.username}`)
        .setColor('RANDOM')
        .setDescription(`\n ${res[Math.floor(Math.random() * res.length)]}`)

        message.channel.send(embed)

    }}