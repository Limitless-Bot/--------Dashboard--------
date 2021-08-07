const Discord = require("discord.js")
const economy = require('../../economy-coins')
const profileSchema = require('../../schemas/profile-schema-money')

module.exports = {
  commands: ['deposit', 'dep'],
  maxArgs: 1,
  expectedArgs: "dep <amount>",
  callback: async (message, arguments) => {

    let arg = ''

    arg += arguments[0]

    if (isNaN(arguments[0]) && arguments[0] != 'all') {
        message.reply(`${arguments[0]} is not a number.`)
            return
        }
    
        const guildId = message.guild.id
        const userId = message.author.id
    
        const result = await profileSchema.findOne(
        {
            userId,
            guildId
        })
    
        const coinsB = result.coinsBank || 0
        const coinsC = result.coinsCash || 0
    
    
    
        if (coinsC < arguments[0]) {
            message.channel.send(`You do not have $${arguments[0]} in cash.`)
            return
        }
    
        if (arguments[0] === 'all') {
            message.channel.send(`Deposited $${coinsC}`)
            return
        }
    
        const newCoinsB = coinsB + arg
        const newCoinsC = coinsC - arg
    
        await profileSchema.findOneAndUpdate(
            {
                userId,
                guildId
            },
            {
                userId,
                guildId,
                coinsCash: newCoinsC,
                coinsBank: newCoinsB
            },
            {
                upsert: true
            }
        )
    
    
        message.channel.send(`Deposited $${arguments[0]}`)
  }}