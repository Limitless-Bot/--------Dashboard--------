const Discord = require('discord.js')
const clockInSchema = require('../../../schemas/clock-in-schema')

    const checkClockIns = async (client) => {

        const now = new Date()

        const conditional = {
            expires: {
                $lt: now
            },
            current: true
        }

        
        const result = await clockInSchema.findOne(conditional)
            
        if (result) {
                
            const channelId = result.channelId

            const guildId = result.guildId
            if (!guildId) {
                return
            }
            
            const guild = await client.guilds.cache.get(guildId)
            if (!guild) {
                return
            }
            if (guild) {
                const channel = guild.channels.cache.get(channelId)
                if (!channel){
                return
                }
            
            channel.send(`<@${result.userId}>, Your ${result.duration} minute shift is over, please clock out.`)
            }
            
            await clockInSchema.updateMany(conditional, {
                    current: false
                })


        }

        setTimeout(() => {
            checkClockIns(client)
        }, 1000 * 1)
    }

    module.exports = async (client) => {
        checkClockIns(client)
    }