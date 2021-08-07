const Discord = require("discord.js")

module.exports = {
    commands: ['dog'],
    expectedArgs: 'dog',
    minArgs: 0,
    maxArgs: 0,
    category: 'Animal_1',
    expectedArgs: 'dog',
    example: 'dog',
    description: 'Shows a picture of a dog.',
    callback: (message, arguments, text) => {

        const pics = [
            'https://tse4.mm.bing.net/th/id/OIP.bBAdHie9rVifIiTHcTEr-gHaE8?w=287&h=191&c=7&o=5&pid=1.7',
            'https://tse2.mm.bing.net/th/id/OIP.xJYHlT3ryn4tKXDej0wKDAHaFj?w=263&h=198&c=7&o=5&pid=1.7',
            'https://tse3.mm.bing.net/th/id/OIP.FPmbUcb50Uw2irlK5PYmZAHaF7?w=248&h=198&c=7&o=5&pid=1.7',
            'https://tse4.mm.bing.net/th/id/OIP.NTxVQOTBtlCMdZoRabceMQHaEK?w=305&h=180&c=7&o=5&pid=1.7',
            'https://tse1.mm.bing.net/th/id/OIP.WuyZfxGKSUeqWMjB3wA5eQHaEo?w=275&h=180&c=7&o=5&pid=1.7',
            'https://tse4.mm.bing.net/th/id/OIP.g25wesKv5Yd-WQe436UP9QHaE5?w=249&h=180&c=7&o=5&pid=1.7',
            'https://tse1.mm.bing.net/th/id/OIP.Dwc5kQ9LKel24UJh793ouQHaGI?w=227&h=188&c=7&o=5&pid=1.7',
            'https://tse1.mm.bing.net/th/id/OIP.bftfarJaZ4qZmZ8V1WFvHAHaDt?w=328&h=175&c=7&o=5&pid=1.7',
            'https://tse2.mm.bing.net/th/id/OIP.AOxieSwnRy3e6Qx6X7Q1ZAHaEK?w=329&h=185&c=7&o=5&pid=1.7',
            'https://tse4.mm.bing.net/th/id/OIP.RW1IclwEbF72BpSq_yteGwHaFj?w=221&h=180&c=7&o=5&pid=1.7',
            'https://tse3.mm.bing.net/th/id/OIP.LYDsgeMeMN3jcq_RUT6BjgHaFj?w=247&h=185&c=7&o=5&pid=1.7',
            'https://tse2.mm.bing.net/th/id/OIP.bBkb4Smv8WD8ieBstM2U0wHaGu?w=206&h=187&c=7&o=5&pid=1.7',
            'https://tse4.mm.bing.net/th/id/OIP.FL-JA5Gz9WJOyhax-mj11gHaEK?w=324&h=182&c=7&o=5&pid=1.7',
            'https://tse4.mm.bing.net/th/id/OIP.rfzMX_0kyTyy0kq2WO-5TAHaEV?w=311&h=182&c=7&o=5&pid=1.7',
            'https://tse2.mm.bing.net/th/id/OIP.q2BLFisS2gr2lyVdWOZKxQHaEK?w=279&h=180&c=7&o=5&pid=1.7',
            'https://tse2.mm.bing.net/th/id/OIP.0_4SmHo9IqUW2m7ppN7D3wHaEo?w=311&h=194&c=7&o=5&pid=1.7',
            'https://tse1.mm.bing.net/th/id/OIP.SkLCBJcc_Z5SGmjyhvu9mAHaFj?w=272&h=204&c=7&o=5&pid=1.7',
            'https://tse4.mm.bing.net/th/id/OIP.FL-JA5Gz9WJOyhax-mj11gHaEK?w=287&h=187&c=7&o=5&pid=1.7',
            'https://tse3.mm.bing.net/th/id/OIP.tAvt-5QDdIjz-bFS7NdpDwHaEo?w=316&h=197&c=7&o=5&pid=1.7',
            'https://tse2.mm.bing.net/th/id/OIP.PBIPZcsAr4iwFCls--ozdwHaEo?w=291&h=181&c=7&o=5&pid=1.7',
            'https://tse3.mm.bing.net/th/id/OIP.Bgtfix0RbRFhx6B3nKdYkQHaEK?w=263&h=180&c=7&o=5&pid=1.7',
            'https://tse4.mm.bing.net/th/id/OIP.wUln0RYaNlCHOBs0m7ievwHaEK?w=272&h=180&c=7&o=5&pid=1.7',
            'https://tse2.mm.bing.net/th/id/OIP.R8ApIqUe3zlMxxk7NCWTUwHaFY?w=260&h=189&c=7&o=5&pid=1.7',    
        
            
        ]

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Dog Picture__**')
        .setFooter(`${message.author.username}`)
        .setColor('RANDOM')
        .setImage(pics[Math.floor(Math.random() * pics.length)])

        message.channel.send(embed)
    }}