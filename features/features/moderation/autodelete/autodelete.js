const autodeleteSchema = require('../../../../schemas/autodelete');

const checkAutodelete = async (client) => {
 
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

    const results = await autodeleteSchema.find({
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
        message.delete()
        message.reply('That word or sentence is on the auto delete list, so I have deleted your message!')
    } catch (err) {
        console.log(err);
    }
    });

        
    });
    }

    module.exports = (client) => {
        checkAutodelete(client)
    }
