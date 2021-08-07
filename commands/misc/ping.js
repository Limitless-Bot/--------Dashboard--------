const Discord = require("discord.js")
const discord = require("discord.js")

module.exports = {
    commands: ['ping'],
    expectedArgs: 'ping',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text, client) => {
        
            let beginEmbed = new discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`Testing Ping`)
            .setTimestamp()
    
            message.channel.send(beginEmbed).then(emsg => {

    
                setTimeout(() => {
    
                    let second1 = new discord.MessageEmbed()
                    .setColor("RED")
                    .setTitle(`Testing Ping.`)
                    .setTimestamp()
    
                    emsg.edit(second1)
        
                    setTimeout(() => {
    
                        let second2 = new discord.MessageEmbed()
                        .setColor("RED")
                        .setTitle(`Testing Ping..`)
                        .setTimestamp()
        
                        emsg.edit(second2)
        
                        setTimeout(() => {
    
                            let second3 = new discord.MessageEmbed()
                            .setColor("RED")
                            .setTitle(`Testing Ping...`)
                            .setTimestamp()
        
                            emsg.edit(second3)
        
                            setTimeout(() => {
    
                                let second4 = new discord.MessageEmbed()
                                .setColor("ORANGE")
                                .setTitle(`Testing Ping.`)
                                .setTimestamp()
        
                                emsg.edit(second4)
        
                                setTimeout(() => {
    
                                    let second5 = new discord.MessageEmbed()
                                    .setColor("ORANGE")
                                    .setTitle(`Testing Ping..`)
                                    .setTimestamp()
        
                                    emsg.edit(second5)
        
                                    setTimeout(() => {
    
                                    let second6 = new discord.MessageEmbed()
                                    .setColor("GREEN")
                                    .setTitle(`Testing Ping...`)
                                    .setTimestamp()
        
                                    emsg.edit(second6)

                                        setTimeout(() => {

                                            let second7 = new discord.MessageEmbed()
                                            .setColor("GREEN")
                                            .setTitle(`**__Pong!__**`)
                                            .setThumbnail('https://i.pinimg.com/originals/95/b5/cc/95b5cc57dcb201fe835d79762aabf4e9.gif')
                                            .setFooter(message.author.username)
                                            .addFields({
                                                name: '**Latency**',
                                                value: `${Date.now() - message.createdTimestamp}ms`,
                                                inline: false
                                            },
                                            {
                                                name: 'API Latency',
                                                value: `${Math.round(client.ws.ping)}ms`
                                            },
                                            {
                                                name: '**Status:**',
                                                value: 'Online',
                                                inline: false
                                            })

                                            emsg.edit(second7)

                                        }, 1000)
                                        
                                    }, 1000)
                                    
                                }, 1000)
                                
                            }, 1000)
                            
                        }, 1000)
                        
                    }, 1000)
        
                }, 1000)
    
                
            })
        
        

    }}