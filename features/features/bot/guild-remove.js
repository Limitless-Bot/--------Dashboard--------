const Discord = require('discord.js')


    const checkGuilds = async (client) => {
        client.on("guildDelete", async guild => {
            try {
              client.user.setActivity(` ${client.guilds.cache.size} Servers | ${client.users.cache.size} Users`, { type: 'WATCHING' })
              let embed = new Discord.MessageEmbed()
              .setTitle("**Limitless Left A Server 😔**\n\n")
              .setColor('#FF0000')
              .setThumbnail('https://media3.giphy.com/media/xT5LMHNmDZWrKL0QSI/giphy.gif?cid=6c09b952503504638340c60d4b35f6bc2f7e37cfb23415dd&rid=giphy.gif&ct=g')
              .addField("**Guild Name:**\n", guild.name, true)
              .setFooter(`Total Guilds Limitless Is In: ${client.guilds.cache.size}, Total Members: ${client.users.cache.size}`)
              const channel = client.channels.cache.get("845732784719003658") 
              channel.send(embed)
              } catch(error) {
                  console.log(error)
                  }
          })
   
    }

    module.exports = async (client) => {
        checkGuilds(client)
    }