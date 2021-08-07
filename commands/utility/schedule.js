const momentTimezone = require('moment-timezone')
const { MessageCollector } = require('discord.js')

const scheduledSchema = require('../../schemas/scheduled-schema')

module.exports = {
    commands: ['schedule'],
    minArgs: 5,
    maxArgs: 5,
    expectedArgs: 'schedule <Channel tag> <YYYY/MM/DD> <HH:MM> <"AM" or "PM"> <Timezone>" ',
    permissions: 'ADMINISTRATOR',
    permissionError: 'You don\'t have the required permissions.',
    callback: async (message, arguments) => {

        const { mentions, guild, channel } = message

        const targetChannel = mentions.channels.first()
        if (!targetChannel) {
            message.reply('Please tag a channel to send your message in!')
            return
        }

        //remove the channel tag from the args array
        arguments.shift()

        const [date, time, clockType, timeZone] = arguments

        if (clockType !== 'AM' && clockType !== 'PM') {
            message.reply(`You must provide either "AM" or "PM", you provided "${clockType}"`)
            return
        }

        const validTimeZones = momentTimezone.tz.names()
        if (!validTimeZones.includes(timeZone)) {
            message.reply('Unknows timezone! Please use one of the following: [Click me to see all timezone options](https://gist.github.com/AlexzanderFlores/d511a7c7e97b4c3ae60cb6e562f78300)')
            return
        } 

        const targetDate = momentTimezone.tz(
            `${date} ${time} ${clockType}`,
            'YYYY-MM-DD HH:mm A',
            timeZone
        )

        message.reply('Please send the message you would like to schedule.')

        const filter = (newMessage) => {
            return newMessage.author.id === message.author.id
        }

            const collector = new MessageCollector(channel, filter, {
                max: 1,
                time: 1000 * 60
            })

            collector.on('end', async (collected) => {
                const collectedMessage = collected.first()

                if (!collectedMessage) {
                    message.reply('You did not reply in time.')
                    return
                }

                message.reply('Your message has been scheduled.')

                await new scheduledSchema({
                    date: targetDate.valueOf(),
                    content: collectedMessage.content,
                    guildId: guild.id,
                    channelId: targetChannel.id
                }).save()
            })
    },
}