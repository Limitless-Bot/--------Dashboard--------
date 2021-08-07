const scheduledSchema = require('../../../schemas/scheduled-schema')


const checkForPosts = async (client) => {

    const now = new Date()

    const conditional = {
        date: {
            $lt: now
        }
    }

    const results = await scheduledSchema.find(conditional)

    for (const post of results) {
        const { guildId, channelId, content } = post

        const guild = await client.guilds.fetch(guildId)
        if (!guild) {
            continue
        }

        const channel = guild.channels.cache.get(channelId)
        if (!channel) {
            continue
        }

        channel.send(content)
    }

    await scheduledSchema.deleteMany(conditional)

    setTimeout(() => {
        checkForPosts(client)
    }, 1000)
}

module.exports = async (client) => {
    checkForPosts(client)
}