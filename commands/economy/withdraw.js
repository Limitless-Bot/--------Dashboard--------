const Discord = require("discord.js")
const profileSchema = require('../../schemas/profile-schema-money')

module.exports = {
  commands: ['withdraw', 'with'],
  maxArgs: 1,
  expectedArgs: "with <amount>",
  callback: async (message, arguments) => {

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



    if (coinsB < arguments[0]) {
        message.channel.send(`You do not have $${arguments[0]} in your bank.`)
        return
    }

    if (arguments[0] === 'all') {
        message.channel.send(`Withdrawed $${coinsB}`)
        return
    }

    const newCoinsB = coinsB - arguments[0]
    const newCoinsC = coinsC + arguments[0]

    await profileSchema.findOneAndUpdate(
        {
            userId,
            guildId
        },
        {
            coinsCash: newCoinsC,
            coinsBank: newCoinsB
        },
        {
            upsert: true
        }
    )


    message.channel.send(`Withdrawed $${arguments[0]}`)
  }}