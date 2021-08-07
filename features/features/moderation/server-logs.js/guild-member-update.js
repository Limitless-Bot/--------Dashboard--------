const { MessageEmbed } = require('discord.js')
const rolestatsSchema = require('../../../../schemas/rolestats-schema')

// { guildId: channelId }
const cache = {}

module.exports = client => {
    client.on('guildMemberUpdate', async (oldMember, newMember) => {

     

        const guild = oldMember.guild

        const guildId = guild.id
        

        const results = await rolestatsSchema.find({
          guildId
      })
        if (!results) {
          return;
        }

for (const result of results) {



        channelId = result.channelId;

        const channelname = guild.channels.cache.get(channelId);

            roleId = result.roleId

        const role2 = guild.roles.cache.get(roleId);

          const role3 = guild.roles.cache

          if (!role2) {
            return
          }

       const rolemembers = role2.members;
        const amount = rolemembers.size 
        countername = result.countername;

        if (channelname) {
          try {
            channelname.setName(`${countername}: ${amount}`);
          } catch (err) {}
        }
      } 



        
}) 
} 