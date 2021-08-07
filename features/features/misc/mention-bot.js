const Discord = require('discord.js')
const client = new Discord.Client()
const cBase = require('../../../commands/command-base')


    const checkMention = async (client) => {

        client.on("message", async (message) => {
        

    
            if (message.author.bot) return false;
        
            if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
            
            const prefix = cBase.prefix
            
            
            if (message.mentions.has(client.user.id)) {
              const embed = new Discord.MessageEmbed()
              .setTitle(`Limitless`)
              .setColor('#4deeea')
              .setDescription(`Hello i'm Limitless, my prefix is: **${prefix}**\nRun **${prefix}help** to get my commands.`)
              .setTimestamp()
          message.channel.send(embed)
            };
        

      
        })
   
    }
    module.exports = async (client) => {
        checkMention(client)
    }