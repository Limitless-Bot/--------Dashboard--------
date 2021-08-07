const Discord = require("discord.js")

module.exports = {
    commands: ['swan'],
    expectedArgs: 'swan',
    minArgs: 0,
    maxArgs: 0,
    category: 'Animal_2',
    description: 'Shows a picture of a swan.',
    expectedArgs: 'swan',
    example: 'swan',
    callback: (message, arguments, text) => {

        const pics = [

            'https://images.unsplash.com/photo-1604134774179-44e6adb65dd9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3dhbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1605529485173-9b6f02aa7258?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3dhbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1588485256313-f021c74731f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3dhbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1607330140294-5b9ee23167a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHN3YW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1472483160703-a6459053c1a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN3YW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1606069908693-1a63a0af407e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHN3YW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1588819245126-8b816f28b035?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHN3YW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1607168192003-6a8df502eaf8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHN3YW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1580047285276-52fed26e9f53?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHN3YW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1595850959399-752cd9a0b89b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHN3YW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',

        ]

        let embed = new Discord.MessageEmbed()
            .setTitle('**__Swan Picture__**')
            .setFooter(`${message.author.username}`)
            .setColor('RANDOM')
            .setImage(pics[Math.floor(Math.random() * pics.length)])
    
            message.channel.send(embed)
        }}