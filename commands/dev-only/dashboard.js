const profileSchema = require('../../schemas/dashboard/profiles-dashboard');

module.exports = {
    commands: ['set-user'],
    callback: async (message, arguments) => {
        const username = arguments[0]
        const password = arguments[1]

        await profileSchema.findOneAndUpdate({
            username
        },
        {
            username,
            password
        },
        {
            upsert: true
        });

        message.reply('set in mongo')
    }
}