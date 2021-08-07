const chatbotSchema = require('../../../schemas/chatbot-schema')
const fetch = require("node-fetch").default;

module.exports = async (client) => {

client.on('message', async (message) => {

    if (!message.guild) {
        return
    }

    const guildId = message.guild.id


    const c = await chatbotSchema.findOne({
        guildId,
    })

    if (!c) {
        return
    }

    
    const CC = c.channelId

    if (message.channel.id === CC) {

        if (message.author.bot) return;

        setTimeout(function(){ 
        
    

        fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}%20me%20a%20joke&uid=${message.author.id}`)
        .then(response => response.json())
        .then(data => {
            message.reply(data.response)
        })
        .catch(()=> {
            message.reply("I couldn\'t fetch response!")
        })
    }, 1000 * 3);  
    }
    })
    }