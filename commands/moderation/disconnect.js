const Discord = require("discord.js")
const modLogsSchema = require('../../schemas/mod-logs-schema')

module.exports = {
    commands: ['disconnect'],
    permissionError: "You need to be able to server disconnect people for this command!",
    expectedArgs: 'disconnect <@user>',
    minArgs: 1,
    maxArgs: null,
    permissions: 'MOVE_MEMBERS',
    callback: async (message, arguments, text) => {


        const { guild } = message

        

        let person = message.guild.member(message.mentions.users.first());
        if(!person) return message.channel.send("You need to @ mention a user!")
        person.voice.kick();
        message.reply(`I have disconnected ${person} from their vc!`)


        c = await modLogsSchema.findOne({
            _id: guild.id
          })

          if (c) {
      
          const channelId = c.channelId
      
          const channel = await message.guild.channels.cache.get(channelId)


        let embed2 = new Discord.MessageEmbed()
                .setTitle("**__VC Disconnect Log__**")
                .setColor('RANDOM')
                .setThumbnail("https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png")
                .setTimestamp()
                .setDescription(`User that was disconneted from VC: ${person}\n\nModerator: <@${message.author.id}>`)

                channel.send(embed2)
      .catch((error) => {
        console.error(error);
      });
    }
    
  }}