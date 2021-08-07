const Discord = require("discord.js")
const economy = require('../../economy-coins')
const profileSchema = require('../../schemas/profile-schema-money')

module.exports = {
  commands: ['rob........'],
  expectedArgs: 'rob',
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: "rob [Target user's @]",
  callback: async (message, text, arguments) => {
    const { guild } = message
    const target = message.mentions.users.first()

    const guildId = message.guild.id
    const targetId = target.id
    const userId = message.author.id

    if (userId === targetId) {
        message.channel.send(`You can not rob yourself!`)
        return
    }

    const resultUser = await profileSchema.findOne({
      guildId,
      userId,
    })


    if (resultUser) {
      coinsBank = resultUser.coinsBank
      coinsCash = resultUser.coinsCash
    } else {
      console.log('Inserting a document')
      await new profileSchema({
        guildId,
        userId,
        coinsBank: 0,
        coinsCash: 0,
      }).save()
    }

    const resultTarget = await profileSchema.findOne({
      guildId,
      userId: targetId,
    })


    if (resultTarget) {
      coinsBank = resultTarget.coinsBank
      coinsCash = resultTarget.coinsCash
    } else {
      console.log('Inserting a document')
      await new profileSchema({
        guildId,
        userId: targetId,
        coinsBank: 0,
        coinsCash: 0,
      }).save()
    }

    const targetResult = profileSchema.findOne(
      {
        guildId,
        userId: targetId
      }
    )

    const userResult = profileSchema.findOne(guildId, userId)

    message.reply(`User: ${userResult}\nTarget: ${targetResult}`)


  }}