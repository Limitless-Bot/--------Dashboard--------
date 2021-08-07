const Discord = require("discord.js")
const cBase = require('../command-base')

const rr = new Discord.MessageEmbed()
.setImage('https://cdn.discordapp.com/attachments/851203368902852628/851203412049395722/image8.png')
.setColor('RANDOM')

const rp = new Discord.MessageEmbed()
.setImage('https://cdn.discordapp.com/attachments/851203368902852628/851203411080642620/image5.png')
.setColor('RANDOM')

const rs = new Discord.MessageEmbed()
.setImage('https://cdn.discordapp.com/attachments/851203368902852628/851203409649860668/image0.png')
.setColor('RANDOM')

const pr = new Discord.MessageEmbed()
.setImage('https://cdn.discordapp.com/attachments/851203368902852628/851203409948311612/image1.png')
.setColor('RANDOM')

const pp = new Discord.MessageEmbed()
.setImage('https://cdn.discordapp.com/attachments/851203368902852628/851203411520782346/image6.png')
.setColor('RANDOM')

const ps = new Discord.MessageEmbed()
.setImage('https://cdn.discordapp.com/attachments/851203368902852628/851203410493308958/image3.png')
.setColor('RANDOM')

const sr = new Discord.MessageEmbed()
.setImage('https://cdn.discordapp.com/attachments/851203368902852628/851203410828066827/image4.png')
.setColor('RANDOM')

const sp = new Discord.MessageEmbed()
.setImage('https://cdn.discordapp.com/attachments/851203368902852628/851203410233655386/image2.png')
.setColor('RANDOM')

const ss = new Discord.MessageEmbed()
.setImage('https://cdn.discordapp.com/attachments/851203368902852628/851203411764576326/image7.png')
.setColor('RANDOM')

module.exports = {
    commands: ['rps'],
    expectedArgs: 'rps <rock/paper/scissors>',
    minArgs: 1,
    maxArgs: null,
    callback: async (message, arguments, text) => {

        const prefix = cBase.prefix
        
        const choice = message.content.replace(`${prefix}rps `, '')
      
 let choices = ['rock', 'paper', 'scissors'];
 if (choices.includes((choice).toLowerCase())){
     let number = Math.floor(Math.random() * 3);
    
     if (number == 1){
        if (choice.toLowerCase()== "rock" ){
            return message.channel.send(rr)
            }
                if (choice.toLowerCase()== "paper" ){
                    return message.channel.send(rp)
                }
                    if (choice.toLowerCase()== "scissors" ){
                        return message.channel.send(rs)
                    }
     }
     if (number == 2){
         if (choice.toLowerCase()== "rock" ){
             return message.channel.send(pr)
             }
                 if (choice.toLowerCase()== "paper" ){
                     return message.channel.send(pp)
                 }
                     if (choice.toLowerCase()== "scissors" ){
                         return message.channel.send(ps)
                     }
     }
     if (number == 0){
         if (choice.toLowerCase()== "rock" ){
         return message.channel.send(sr)
         }
             if (choice.toLowerCase()== "paper" ){
                 return message.channel.send(sp)
             }
                 if (choice.toLowerCase()== "scissors" ){
                     return message.channel.send(ss)
                 }
     }

}
    }}