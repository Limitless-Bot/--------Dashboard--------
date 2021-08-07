const Discord = require("discord.js")

const shiftsLeaderboardSchema = require('../../../schemas/shift-leaderboard-schema')
const shiftsSchema = require('../../../schemas/profile-schema')

const fetchTopMemebers = async (guildId) => {
    let text = ''

    const results = await shiftsSchema
    .find({
        guildId
    })
    .sort({
        coins: -1
    })

    for (let counter = 0; counter < results.length; ++counter) {
        const { userId, coins = 0 } = results[counter]


        const msg = text += `**#${counter + 1}   **<@${userId}> with **\`${coins}\`** shifts\n\n`
    }

    text += '\nThis is updated every minute'


        
        
        let embed = new Discord.MessageEmbed()
        .setTitle(`**__Shift Leaderboard__**`)
        .setColor('#74ee15')
        .setThumbnail(`https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png`)
        .setDescription(text)
        .setFooter('Powered by Limitless')

    return embed
}

const updateLeaderboard = async (client) => {
const results = await shiftsLeaderboardSchema.find({})

    for (const result of results) {
        const { channelId, _id: guildId } = result

        const guild = client.guilds.cache.get(guildId)
        if (guild) {
            const channel = guild.channels.cache.get(channelId)
            if (channel) {
                const messages = await channel.messages.fetch()
                const firstMessage = messages.first()
                


                const topMembers = await fetchTopMemebers(guildId)

 
                if (firstMessage) {
                    const authorId = firstMessage.author.id
                    const clientId = client.user.id

                    if (authorId === clientId) {
                    firstMessage.edit(topMembers)
                    }

                    if (authorId !== clientId) {
                    channel.send('Please keep this channel clear if possible!\nI will show the shift leaderboard in one minute.')
                        setTimeout(async () => {
                            const m = await channel.messages.fetch()
                            const fM = m.first()

                            const mL = await channel.messages.fetch(fM.id)

                            if (mL) {
                            setTimeout(() => {
                                mL.edit('', topMembers)
                            }, 1000 * 58)
                            }

                            if (!mL) {
                                channel.send(topMembers)
                            }


                        }, 1000 * 1)

                        }
                } else {
                    channel.send(topMembers)
                }
            }
        }
    }

    setTimeout(() => {
        updateLeaderboard(client)
    }, 1000 * 60)
}

module.exports = async (client) => {
    updateLeaderboard(client)
}