const muteSchema= require('../../../../schemas/mute-schema')

module.exports = client => {
    const checkMutes = async () => {

        const now = new Date()

        const conditional = {
            expires: {
                $lt: now
            },
            current: true
        }

        const results = await muteSchema.find(conditional)

        if (results && results.length) {
            for (const result of results) {
                const { guildId, userId } = result

                const guild = client.guilds.cache.get(guildId)
                const member = (await guild.members.fetch(userId))

                const mutedRole = guild.roles.cache.find(role => {
                    return role.name === 'Muted'
                })

                member.roles.remove(mutedRole)
            }

            await muteSchema.updateMany(conditional, {
                current: false
            })
        }

        setTimeout(checkMutes, 1000 * 60 * 2)
    }
    checkMutes()

    client.on('guildMemberAdd', async member => {
        const { guild, id } = member

        const currentMute = await muteSchema.findOne({
            userId: id,
            guildId: guild.id,
            current: true
        })

        if (currentMute) {
            const role = guild.roles.cache.find(role => {
                return role.name === 'Muted'
            })

            if (role) {
                member.roles.add(role)
            }
        }
    })
}