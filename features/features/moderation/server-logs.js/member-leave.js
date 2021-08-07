const { MessageEmbed } = require('discord.js')
const leaveSchema = require('../../../../schemas/guild-leave')
const modlogSchema = require('../../../../schemas/mod-logs-schema')
const membercountSchema = require('../../../../schemas/membercount-schema')


// { guildId: channelId }
const cache = {}

const cache2 = {}

module.exports = client => {
    client.on('guildMemberRemove', async (member) => {

        const guild = member.guild

        //MOD LOGS:


            const result2 = await modlogSchema.findById(guild.id)
            if (!result2) {
                return
            }
    
            channelId2 = result2.channelId
    
            const embed2 = new MessageEmbed()
        .setTitle(`Member Left The Server`)
        .setColor('RANDOM')
        .setTimestamp()
        .setDescription(`**User:**\n${member.user}\n${member.user.tag}\n${member.user.id}`)
        .setFooter(`Member Count: ${guild.memberCount}`)
    
            const targetChannel2 = guild.channels.cache.get(channelId2)

            
            if (targetChannel2) {
        targetChannel2.send(embed2);

        
    }

    //MEMBER COUNT:

        
    const result3 = await membercountSchema.findById(guild.id)
            if (!result3) {
                return
            }

            channelId3 = result3.channelId

            const channelname = guild.channels.cache.get(channelId3)

         

            
            if (channelname) {
                try {
                    channelname.setName(`Total Members: ${guild.memberCount}`)
                  } catch (err) {
            }
        }

            //LEAVE MESSAGE:

        if (!guild) {
            return
        }

        
        let channelId = cache[guild.id]
        let leaveMessage = cache[guild.id]
        if (!channelId) {
            const result = await leaveSchema.findOne({
                guildId: guild.id
            })
            if (!result) {
                return
            }

            channelId = result.channelId
            leaveMessage = result.leavemessage

            cache[guild.id] = leaveMessage
            cache2[guild.id] = channelId

        }

        const icon = guild.iconURL()


        const embed = new MessageEmbed()
        .setTitle(`${member.user.tag} left ${guild}`)
        .setColor('#FF0000')
        .setTimestamp()
        .setThumbnail(icon)
        .setDescription(leaveMessage)
        .setFooter(`Member Count: ${guild.memberCount}`)

    const targetChannel = guild.channels.cache.get(channelId)
    if (targetChannel) {
        targetChannel.send(embed);
    }
    })
}