const Discord = require('discord.js')
const DisTube = require('distube')
const cBase = require('../../../commands/command-base')


const checkMusic = async (client) => {
  
  const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });
  
  client.on("message", async (message) => {
    
    const prefix = cBase.prefix
    
    if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift();

  const { voice: userVoice } = message.member

  
  if (command == "play") {
  if (!userVoice.channelID) {
    message.reply('Join a voice channel!')
    return
  }

  distube.play(message, args.join(" ")).on("error", error => console.error(error));
   
  }


  if (command == "seek") {
    if (!distube.isPlaying(message)) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Limitless Music Player`)
      .setColor('#4deeea')
      .setDescription(`Currently there is no music playing.`)
      .setTimestamp()
  
      message.channel.send(embed)
      return
    }

      distube.seek(message, Number(args[0]))
      message.channel.send(message, Number(args[0]))
  }


  if (["repeat", "loop"].includes(command)) {
    if (!distube.isPlaying(message)) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Limitless Music Player`)
      .setColor('#4deeea')
      .setDescription(`Currently there is no music playing.`)
      .setTimestamp()
  
      message.channel.send(embed)
      return
    }

    let mode = distube.setRepeatMode(message, parseInt(args[0]));
    mode = mode ? mode == 2 ? "Repeat queue" : "Repeat song" : "Off";

    let embed = new Discord.MessageEmbed()
      .setTitle(`Limitless Music Player`)
      .setColor('#4deeea')
      .setDescription("Set repeat mode to `" + mode + "`")
      .setTimestamp()

  message.channel.send(embed);
  }


  if (command == "stop") {
    if (!distube.isPlaying(message)) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Limitless Music Player`)
      .setColor('#4deeea')
      .setDescription(`Currently there is no music playing.`)
      .setTimestamp()
  
      message.channel.send(embed)
      return
    }




    if (!userVoice.channelID) {
      message.channel.send(`You must be in a voice channel.`)
      return
    }



      distube.stop(message);
      let embed = new Discord.MessageEmbed()
      .setTitle(`Limitless Music Player`)
      .setColor('#4deeea')
      .setDescription("Stopped the music!")
      .setTimestamp()

      message.channel.send(embed);
  }


  if (command == "volume") {
    if (isNaN(args)) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Limitless Music Player`)
      .setColor('#4deeea')
      .setDescription(`Please say a number`)
      .setTimestamp()
  
      message.channel.send(embed)
      return
    }

    if (!distube.isPlaying(message)) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Limitless Music Player`)
      .setColor('#4deeea')
      .setDescription(`Currently there is no music playing.`)
      .setTimestamp()
  
      message.channel.send(embed)
      return
    }

    distube.setVolume(message, args[0])
    let embed = new Discord.MessageEmbed()
    .setTitle(`Limitless Music Player`)
    .setColor('#4deeea')
    .setDescription(`Volume set to ${args[0]}%`)
    .setTimestamp()

    message.channel.send(embed);
  }


  if (command == "shuffle") {
    if (!distube.isPlaying(message)) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Limitless Music Player`)
      .setColor('#4deeea')
      .setDescription(`Currently there is no music playing.`)
      .setTimestamp()
  
      message.channel.send(embed)
      return
    }

    distube.shuffle(message)

    let embed = new Discord.MessageEmbed()
    .setTitle(`Limitless Music Player`)
    .setColor('#4deeea')
    .setDescription(`Shuffling queue`)
    .setTimestamp()

    message.channel.send(embed);
  }


  if (command == "resume") {
    distube.resume(message)
    let embed = new Discord.MessageEmbed()
    .setTitle(`Limitless Music Player`)
    .setColor('#4deeea')
    .setDescription("Resumed the music!")
    .setTimestamp()

    message.channel.send(embed);
  }


  if (command == "pause") {
    if (!distube.isPlaying(message)) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Limitless Music Player`)
      .setColor('#4deeea')
      .setDescription(`Currently there is no music playing.`)
      .setTimestamp()
  
      message.channel.send(embed)
      return
    }

    distube.pause(message)
    let embed = new Discord.MessageEmbed()
    .setTitle(`Limitless Music Player`)
    .setColor('#4deeea')
    .setDescription("Paused the music!")
    .setTimestamp()

    message.channel.send(embed);
  }


  if (command == "skip") {
    if (!distube.isPlaying(message)) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Limitless Music Player`)
      .setColor('#4deeea')
      .setDescription(`Currently there is no music playing.`)
      .setTimestamp()
  
      message.channel.send(embed)
      return
    }

      distube.skip(message);
      let embed = new Discord.MessageEmbed()
    .setTitle(`Limitless Music Player`)
    .setColor('#4deeea')
    .setDescription("Skiped to next song!")
    .setTimestamp()

    message.channel.send(embed);
    return
  }


  if (command == "autoplay") {
    if (!distube.isPlaying(message)) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Limitless Music Player`)
      .setColor('#4deeea')
      .setDescription(`Currently there is no music playing.`)
      .setTimestamp()
  
      message.channel.send(embed)
      return
    }

    let mode = distube.toggleAutoplay(message);
    let embed = new Discord.MessageEmbed()
  .setTitle(`Limitless Music Player`)
  .setColor('#4deeea')
  .setDescription("Set autoplay mode to `" + (mode ? "On" : "Off") + "`")
  .setTimestamp()

  message.channel.send(embed);
  return
}


  if (command == "queue") {
    if (!distube.isPlaying(message)) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Limitless Music Player`)
      .setColor('#4deeea')
      .setDescription(`Currently there is no music playing.`)
      .setTimestamp()
  
      message.channel.send(embed)
      return
    }

    const q = (queue) => `Volume: ${queue.volume}% | Filter: ${queue.filter || "Off"} | Loop: ${queue.repeatMode ? queue.repeatMode == 2 ? "All Queue" : "This Song" : "Off"} | Autoplay: ${queue.autoplay ? "On" : "Off"}`;


    let queue = distube.getQueue(message);
    let embed = new Discord.MessageEmbed()
    .setTitle(`Limitless Music Player`)
    .setColor('#4deeea')
    .setDescription('Current queue:\n' + queue.songs.map((song, id) =>
        `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\` Requested by: ${song.user}`
    ).slice(0, 10).join("\n"))
    .setTimestamp()
    .setFooter(q(queue))

    message.channel.send(embed);
}


  if ([`3d`, `bassboost`, `echo`, `nightcore`, `vaporwave`, `flanger`, `gate`, `haas`, `reverse`, `mcompand`, `phaser`, `tremolo`, `surround`, `earwax`].includes(command)) {
    if (!distube.isPlaying(message)) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Limitless Music Player`)
      .setColor('#4deeea')
      .setDescription(`Currently there is no music playing.`)
      .setTimestamp()
  
      message.channel.send(embed)
      return
    }

      let filter = distube.setFilter(message, command);
      let embed = new Discord.MessageEmbed()
      .setTitle(`Limitless Music Player`)
      .setColor('#4deeea')
      .setDescription("Current queue filter: " + (filter || "Off"))
      .setTimestamp()
  
      message.channel.send(embed);
  }
})

// Queue status template
const status = (queue) => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

// DisTube event listeners, more in the documentation page
distube
  .on("playSong", (message, queue, song) => {
    let embed = new Discord.MessageEmbed()
    .setTitle(`Limitless Music Player`)
    .setColor('#4deeea')
    .setDescription(`Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n${status(queue)}`)
    .setTimestamp()

    message.channel.send(embed);
  })

  
  .on("addSong", (message, queue, song) => {
    let embed = new Discord.MessageEmbed()
    .setTitle(`Limitless Music Player`)
    .setColor('#4deeea')
    .setDescription(`Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`)
    .setTimestamp()

    message.channel.send(embed);
  })


  .on("playList", (message, queue, playlist, song) => {
    let embed = new Discord.MessageEmbed()
    .setTitle(`Limitless Music Player`)
    .setColor('#4deeea')
    .setDescription(`Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`)
    .setTimestamp()

    message.channel.send(embed);
  })


  .on("addList", (message, queue, playlist) => {
    let embed = new Discord.MessageEmbed()
    .setTitle(`Limitless Music Player`)
    .setColor('#4deeea')
    .setDescription(`Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`)
    .setTimestamp()

    message.channel.send(embed);
  })


  // DisTubeOptions.searchSongs = true
  .on("searchResult", (message, result) => {
      let i = 0;
      const l = result.map((song) => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")
      let embed = new Discord.MessageEmbed()
    .setTitle(`Limitless Music Player`)
    .setColor('#4deeea')
    .setDescription(`**Choose an option from below**\n\n${l}\n\n*Enter anything else or wait 60 seconds to cancel*`)
    .setTimestamp()

    message.channel.send(embed);
  })


  // DisTubeOptions.searchSongs = true
  .on("searchCancel", (message) => {
    let embed = new Discord.MessageEmbed()
    .setTitle(`Limitless Music Player`)
    .setColor('#4deeea')
    .setDescription(`Searching cancelled`)
    .setTimestamp()

    message.channel.send(embed);
  })


  .on("error", (message, e) => {
      console.error(e)

      let embed = new Discord.MessageEmbed()
      .setTitle(`Limitless Music Player`)
      .setColor('#4deeea')
      .setDescription("An error encountered: " + e)
      .setTimestamp()
  
      message.channel.send(embed);
  });


}
    module.exports = async (client) => {
        checkMusic(client)
    }