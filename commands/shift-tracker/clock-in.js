const { addMinutes } = require("date-and-time")
const Discord = require("discord.js")
const { duration } = require("moment")
const clockInSchema = require('../../schemas/clock-in-schema')
const timeSchema = require('../../schemas/shift-time')
const maxSchema  = require('../../schemas/max-clock-in-schema')

module.exports = {
    commands: ['clock-in'],
    minArgs: 0,
    maxArgs: 1,
    expectedArgs: 'clock-in',
    callback: async (message, arguments, text) => {
        const { guild } = message

        const icon = guild.iconURL()
        const authorId = message.author.id
        const userId = message.author.id
        const guildId = message.guild.id
        const channelId = message.channel.id
        const now = new Date(Date.now())


        const max = await clockInSchema.findOne({
            userId,
            guildId,
        })

        const timeS = await timeSchema.findOne({
            guildId
        })
        let duration = []

        if (timeS) {
            duration = +timeS.time
        }
        if (!timeS) {
            duration = +20
        }

        if (max) {
            const embed5 = new Discord.MessageEmbed()
            .setTitle(`**__Limitless__**`)
            .setColor('#74ee15')
            .setThumbnail(icon)
            .setDescription(`<@${authorId}> You have already clocked in within the last ${duration} minutes!`)
            
            message.channel.send(embed5)
            return
        }


        const maxA = await clockInSchema.find({
            guildId,
        })

        const maxU = await maxSchema.find({
            guildId
        })

        const amountClockedIn = maxA.length
        let maxAmount = ''

        if (maxU[0]) {
            maxAmount = maxU[0].max
        }
        if (!maxU[0]) {
            maxAmount = 2
        }


        if (amountClockedIn === maxAmount) {
            message.reply('Max users are already clocked in!')
            return
        }
        
        
        const previousClockIn = await clockInSchema.find({
            userId: message.author.id,
            guildId,
        })

        const currentlyClockedIn = previousClockIn.filter(mute => {
            return mute.current === true
        })

        
        const b1 = '695701592330207252' // BCTA
        const b2 = '767003299986931752' // 24/7
        const b3 = '827656617574924318' // Jetsam
        const b4 = '697526278344933377' // Ammu-Nation
        const b5 = '635943524143071264' // LSC
        const b6 = '801823979647270984' // Weazel News
        const b7 = '767087295446122566' // Yellow Jack
        const b8 = '695093415897071647' // Liquor Ace
        
        if (guildId === guildId === b1 || guildId === b2 || guildId === b3 || guildId === b4 || guildId === b5 || guildId === b6 || guildId === b7 || guildId === b8) {

        const business1 = await clockInSchema.find({
            guildId: b1
        })

        const business2 = await clockInSchema.find({
            guildId: b2
        })

        const business3 = await clockInSchema.find({
            guildId: b3
        })

        const business4 = await clockInSchema.find({
            guildId: b4
        })

        const business5 = await clockInSchema.find({
            guildId: b5
        })

        const business6 = await clockInSchema.find({
            guildId: b6
        })

        const business7 = await clockInSchema.find({
            guildId: b7
        })

        const business8 = await clockInSchema.find({
            guildId: b8
        })

        const bz1 = business1.length || 0
        const bz2 = business2.length || 0
        const bz3 = business3.length || 0
        const bz4 = business4.length || 0
        const bz5 = business5.length || 0
        const bz6 = business6.length || 0
        const bz7 = business7.length || 0
        const bz8 = business8.length || 0

        if (bz1 + bz2 + bz3 + bz4 + bz5 + bz6 + bz7 + bz8 === 6) {
            message.reply(`There is currently already 6 people clocked in between all LSLRP businesses, this is to follow business rules, please clock in later, when one of the people in the other businesses has clocked out!`)
            return
        }
    }


        const expires = new Date()
        expires.setMinutes(duration + expires.getMinutes())



        await new clockInSchema({
            userId,
            guildId,
            expires,
            duration,
            current: true,
            channelId
        }).save()

        

        const TimeE = `${expires.getHours()}:${expires.getMinutes()}`
        const TimeN = `${now.getHours()}:${now.getMinutes()}`
    
        const embed = new Discord.MessageEmbed()
        .setTitle(`**__Limitless__**`)
        .setColor('#74ee15')
        .setThumbnail(icon)
        .setDescription(`<@${authorId}> **Clocked in!**\nDate: ${now.toLocaleDateString()}\nTime: ${TimeN}\nClock out at: ${TimeE}`)
        

        message.channel.send(embed)


      }}
    