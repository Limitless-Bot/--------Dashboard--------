const { MessageEmbed } = require("discord.js");
const welcomeSchema = require("../../../../schemas/welcome");
const modlogSchema = require("../../../../schemas/mod-logs-schema");
const membercountSchema = require("../../../../schemas/membercount-schema");
const joinroleSchema = require("../../../../schemas/joinrole-schema");

// { guildId: channelId }
const cache = {}
// { guildId: welcomeMessage}
const cache2 = {}

module.exports = client => {
    client.on('guildMemberAdd', async (member) => {
        const guild = member.guild

        if (!guild) {
            return
        }


        //MOD LOGS:

            const result2 = await modlogSchema.findById(guild.id);
            if (!result2) {
              return;
            }

            channelId2 = result2.channelId;

            const embed2 = new MessageEmbed()
              .setTitle(`Member Joined The Server`)
              .setColor("RANDOM")
              .setTimestamp()
              .setDescription(
                `**User:**\n${member.user}\n${member.user.tag}\n${member.user.id}`
              )
              .setFooter(`Member Count: ${guild.memberCount}`);

            const targetChannel2 = guild.channels.cache.get(channelId2);

            if (targetChannel2) {
              targetChannel2.send(embed2);
            } 


        //MEMBER COUNT:

            const result3 = await membercountSchema.findById(guild.id);
            if (!result3) {
              return;
            }

            channelId3 = result3.channelId;

            const channelname = guild.channels.cache.get(channelId3);

            if (channelname) {
              try {
                channelname.setName(`Total Members: ${guild.memberCount}`);
              } catch (err) {}
            }


        //JOIN ROLE

            const result4 = await joinroleSchema.findById(guild.id);
            if (!result4) {
              return;
            }

            roleId = result4.roleId;

            for (const role of roleId) {

            const rolename = guild.roles.cache.get(role);

            if (rolename) {
              try {
                member.roles.add(rolename);
              } catch (err) {}
            }
        }


        //WELCOME MESSAGE:
        
            let channelId = cache[guild.id];
            let welcomeMessage = cache[guild.id];

            if (!channelId) {
              const result = await welcomeSchema.findOne({
                guildId: guild.id,
              });
              
            if (!result) {
                return;
            }

              channelId = result.channelId;
              welcomeMessage = result.welcomemessage;

              cache[guild.id] = welcomeMessage;
              cache2[guild.id] = channelId;
            }

            const icon = guild.iconURL();

            const embed = new MessageEmbed()
              .setTitle(`Welcome ${member.user.tag} to ${guild}`)
              .setColor("#00FF00")
              .setTimestamp()
              .setThumbnail(icon)
              .setDescription(welcomeMessage)
              .setFooter(`Member Count: ${guild.memberCount}`);

            const targetChannel = guild.channels.cache.get(channelId);
            if (targetChannel) {
              targetChannel.send(`<@${member.user.id}>`);
              targetChannel.send(embed).then((message) => {
                message.react("👋");
              });
            }




    })
}