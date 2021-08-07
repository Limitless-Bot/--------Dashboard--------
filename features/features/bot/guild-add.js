const Discord = require('discord.js')


    const checkGuilds = async (client) => {
        client.on("guildCreate", async (guild) => {
            try {
              client.user.setActivity(` ${client.guilds.cache.size} Servers | ${client.users.cache.size} Users`, { type: 'WATCHING' })
                let embed = new Discord.MessageEmbed()
                .setTitle("**Limitless Joined A Server! 🙂**\n\n")
                .setColor('#13FF00')
                .setThumbnail('https://media1.tenor.com/images/9019b545c923e8fab876a26f65262a01/tenor.gif?itemid=17375289')
                .addField("**Guild Name:**\n", guild.name, true)
                .addField("**Guild Owner:**\n", "<@" + guild.ownerID + "> (" + guild.ownerID + ")", true)
                .addField("**Member Count:**\n", guild.memberCount, true)
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