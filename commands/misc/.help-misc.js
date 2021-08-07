const Discord = require("discord.js")
const cBase = require('../command-base')

module.exports = {
    commands: ['help-misc'],
    expectedArgs: '<displays the misc commands>',
    minArgs: 0,
    callback: (message, arguments, text) => {

        const prefix = cBase.prefix

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Misc Help Commands__**')
        .setColor('RANDOM')
        .setFooter(`${message.author.username}`)
        .setThumbnail('https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png')
        .setDescription(`[Support Server](https://discord.gg/SbNs7CexP6) **|** [Invite](https://discord.com/api/oauth2/authorize?client_id=814913860900749333&permissions=8&scope=bot) **|** [Website](https://limitless-d1eafe.webflow.io/)\n**${prefix}report** (Reports a problem to developers) \n\n**The following are the bots misc commands:**`)
        .addFields({
            name: `${prefix}tacobell [@user]`,
            value: `Shows the taco bell scneario`,
            inline: false
        },
        {
            name: `${prefix}cringe [@user]`,
            value: `Shows the cringeness %`,
            inline: false
        },
        {
            name: `${prefix}puke [@user]`,
            value: `Starts the puke scenario`,
            inline: false
        },
        {
            name: `${prefix}simp [@user]`,
        value: `Shows the simpness %`,
        inline: false
    },
    {
        name: `${prefix}ping`,
        value: `Will show you the bots Latency`,
        inline: false
    },
    {
        name: `${prefix}dice`,
        value: "Will roll a 6 sided fair dice",
        inline: false
    },
    {
        name: `${prefix}dinosaur`,
        value: "Does a fun animation",
        inline: false
    },
    {
        name: `${prefix}coin-flip`,
        value: "Will flip a coin, giving you heads or tails",
        inline: false
    },
    {
        name: `${prefix}random-number <min number> <max number>`,
        value: "Will pick a random number between the entered min and max numbers",
        inline: false
    },
    {
        name: `${prefix}set-chatbot #channel`,
        value: "Sets the mentioned channel as the chatbot channel. All messages sent in there, will be replied to by the bot as if it were your friend...",
        inline: false
    },
    {
        name: `${prefix}chuck-norris`,
        value: "Gives fact or quote about Chuck Norris",
        inline: false
    },
    {
        name: `${prefix}dictionary <word>`,
        value: "Allows you to look up that word in the urban dictionary",
        inline: false
    },
    {
    
        name: `${prefix}uptime`,
        value: "Will show you the bot\'s current uptime",
        inline: false
    },
    {
  
        name: `${prefix}911`,
        value: `Will send a message saying calling 911`,
        inline: false
    },
    {
        name: `${prefix}t-d`,
        value: "Shows a truth or dare!",
        inline: false
    },
    {
        name: `${prefix}advice`,
        value: `Gives you some Advice`,
        inline: false
    },
    {
        name: `${prefix}insult`,
        value: `Will display a random insult`,
        inline: false
    },
    {
        name: `${prefix}bored`,
        value: `Will tell you something to do if your bored`,
        inline: false
    },
    {
        name: `${prefix}fortune`,
        value: `Will display your fortune`,
        inline: false
    },
    {
        name: `${prefix}global-news`,
        value: `Will display some very outdated global news`,
        inline: false
    },
    {
    
        name: `${prefix}timer <duration s/m/d> <reminder>`,
        value: `This allows you to set a timer, you can either do it in minutes (m), seconds (s) or hours (h). You can also add an optional reason, the bot will send you a dm when the timer has finished. Example: ${prefix}timer 20m do some coding`,
        inline: false
    },
    {
        name: `${prefix}reminder <duration s/m/d> <reminder>`,
        value: `This allows you to set a reminder, you can either do it in minutes (m), seconds (s), hours (h) or days (d). You can also add a reason, the bot will send you a dm when the reminderis scheduled. Example: ${prefix}reminder 1h go take a break from coding`,
        inline: false
    },
    {
        name: `\n${prefix}joke`,
        value: `Will display a random joke`,
        inline: false
    },
    {
        name: `${prefix}kanye`,
        value: `Will display a random Kanye West quote`,
        inline: false
    },
    {
        name: `${prefix}lookup <webiste>`,
        value: `Gives you information about that website`,
        inline: false
    },
    {
        name: `${prefix}gif <the gif you want>`,
        value: `Will post a tenor gif from what you searched`,
        inline: false
    },
    {
        name: `${prefix}game-search <name of the game>`,
        value: `Will give you info about the game`,
        inline: false
    },
    {
        name: `${prefix}trump`,
        value: `Will post trump quote`,
        inline: false
    },
    {
        name: `${prefix}slap <@user>`,
        value: `Sends a fun gif and you slap that user`,
        inline: false
    },
    {
        name: `${prefix}hug <@user>`,
        value: `Sends a fun gif and you hug that user`,
        inline: false
    },
    {
        name: `${prefix}wink <@user>`,
        value: `Sends a fun gif and you wink at that user`,
        inline: false
    },
    {
        name: `${prefix}punch <@user>`,
        value: `Sends a fun gif and you punch that user`,
        inline: false
    },
    {
        name: `${prefix}kill <@user>`,
        value: `Sends a fun gif and you kill that user`,
        inline: false
    },
    {
        name: `\n${prefix}8ball <question>`,
        value: `Will answer your question with a yes/no type of answer`,
        inline: false
    },
    {
        name: `${prefix}meme`,
        value: `Will display a random meme`,
        inline: false
    },
    {
        name: `${prefix}quote`,
        value: `Will show you a random inspirational quote`,
        inline: false
    },
    {
        name: `${prefix}riddle`,
        value: `Will display a random riddle`,
        inline: false
    },
    {
        name: `\n${prefix}vote <message>`,
        value: `Will put your vote into an embed and auto add reactions so other can vote on it, You can also post images with the vote command`,
        inline: false
    },
    {
        name: `${prefix}test`,
        value: `Allows you to see that the bot is working`,
        inline: false
    })

        message.channel.send(embed)
    }}