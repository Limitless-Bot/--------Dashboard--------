const Discord = require("discord.js")
const cBase = require('../command-base')

module.exports = {
    commands: ['help-music'],
    expectedArgs: 'help-music',
    minArgs: 0,
    callback: (message, arguments, text) => {

      const prefix = cBase.prefix

      let embed = new Discord.MessageEmbed()
      .setTitle('**__Music Help Commands__**')
      .setColor('RANDOM')
      .setFooter(`${message.author.username}`)
      .setThumbnail('https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png')
      .setDescription(`[Support Server](https://discord.gg/SbNs7CexP6) **|** [Invite](https://discord.com/api/oauth2/authorize?client_id=814913860900749333&permissions=8&scope=bot) **|** [Website](https://limitless-d1eafe.webflow.io/)\n**${prefix}report** (Reports a problem to developers) \n\n**The following commands will show you the bots music commands:**`)
      .addFields({
        name: `${prefix}play <song name/song link (YouTube)/playlist link (YouTube)>`,
        value: `This will connect the bot to your voice channel and play the song/playlist you linked or will give you the option to choose a suggested song based on the search.`,
        inline: false
    },
    {
      name: `${prefix}loop`,
      value: `Will loop the music`,
      inline: false
    },
    {
      name: `${prefix}stop`,
      value: `Will stop the current playing music`,
      inline: false
    },
    {
      name: `${prefix}pause`,
      value: `Will pause the current playing music`,
      inline: false
    },
    {
      name: `${prefix}resume`,
      value: `Will resume the current playing music`,
      inline: false
    },
    {
      name: `${prefix}shuffle`,
      value: `Will shuffle the current queue`,
      inline: false
    },
    {
      name: `${prefix}skip`,
      value: `Will skip the playing song`,
      inline: false
    },
    {
      name: `${prefix}volume`,
      value: `Change the volume`,
      inline: false
    },
    {
        name: `${prefix}queue`,
        value: `Will show the current song queue`,
        inline: false
      },
      {
        name: `${prefix}3d`,
        value: `Adds a cool effect to the song`,
        inline: false
      },
      {
        name: `${prefix}bassboost`,
        value: `Boosts the base line while playing`,
        inline: false
      },
      {
        name: `${prefix}echo`,
        value: `Will turn on an echo while playing the song`,
        inline: false
      },
      {
        name: `${prefix}nightcore`,
        value: `Adds a cool effect to the song`,
        inline: false
      },
      {
        name: `${prefix}vaporwave`,
        value: `Adds a cool effect to the song`,
        inline: false
      },
      {
        name: `${prefix}flanger`,
        value: `Adds a cool effect to the song`,
        inline: false
      },
      {
        name: `${prefix}gate`,
        value: `Adds a cool effect to the song`,
        inline: false
      },
      {
        name: `${prefix}haas`,
        value: `Adds a cool effect to the song`,
        inline: false
      },
      {
        name: `${prefix}reverse`,
        value: `Adds a cool effect to the song`,
        inline: false
      },
      {
        name: `${prefix}mcompand`,
        value: `Adds a cool effect to the song`,
        inline: false
      },
      {
        name: `${prefix}phaser`,
        value: `Adds a cool effect to the song`,
        inline: false
      },
      {
        name: `${prefix}tremolo`,
        value: `Adds a cool effect to the song`,
        inline: false
      },
      {
        name: `${prefix}surround`,
        value: `Adds a cool effect to the song`,
        inline: false
      },
      {
        name: `${prefix}earwax`,
        value: `Adds a cool effect to the song`,
        inline: false
      }
    )
        
        message.channel.send(embed)
    }}