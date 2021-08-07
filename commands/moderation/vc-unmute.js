const Discord = require("discord.js")
const modLogsSchema = require('../../schemas/mod-logs-schema')

module.exports = {
    commands: ['vc-unmute'],
    permissionError: "You need to be able to server mute people for this command!",
    expectedArgs: 'vc-unmute <@user>',
    minArgs: 1,
    maxArgs: null,
    permissions: 'MUTE_MEMBERS',
    callback: async (message, arguments, text) => {

        const { guild } = message

        

        let person = message.guild.member(message.mentions.users.first());
        if(!person) return message.channel.send("You need to @ mention a user!")
        person.voice.setMute(false);
        message.reply(`I have server unmuted ${person} in their vc!`)


        c = await modLogsSchema.findOne({
            _id: guild.id
          })

          if (c) {
      
          const channelId = c.channelId
      
          const channel = await message.guild.channels.cache.get(channelId)

        let embed2 = new Discord.MessageEmbed()
                .setTitle("**__VC Unmute Log__**")
                .setColor('RANDOM')
                .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
                .setTimestamp()
                .setDescription(`User that was server unmuted: ${person}\n\nModerator: <@${message.author.id}>`)

                channel.send(embed2)
      .catch((error) => {
        console.error(error);
      });
    }
  
  }}