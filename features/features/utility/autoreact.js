const autoreactSchema = require('../../../schemas/autoreact');

const checkAutoreact = async (client) => {
 
client.on('message', async (message) => {

    const author = message.author
    const guild = message.guild

    if (!guild) {
        return
    }
    const guildId = message.guild.id
    
    if (author.bot || message.channel.type === "dm") {
        return
    }

    const results = await autoreactSchema.find({
        guildId
    })

    if (!results) {
        return
    }

    results.forEach((results) => {
        const messageC = message.content.toUpperCase()
        if (!messageC.includes(results.targetWords)) {
            return
        }
        try {
        message.react(results.emoji)
    } catch (err) {
        console.log(err);
    }
    });

        
    });
    }

    module.exports = (client) => {
        checkAutoreact(client)
    }
