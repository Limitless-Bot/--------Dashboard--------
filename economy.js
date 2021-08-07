const mongo = require('./mongo')
const profileSchema = require('./schemas/profile-schema')

const shiftsCache = {} // { 'guildId-userId': coins }

module.exports = (client) => {}

module.exports.resetShiftsServer = async (guildId) => {

        const result = await profileSchema.deleteMany(
          {
            guildId
          })
      

      return
}


module.exports.resetCoins = async (guildId, userId, coins) => {

  const result = await profileSchema.deleteMany(
    {
      guildId,
      userId,
      coins,
    },
  )

  return
}

module.exports.addCoins = async (guildId, userId, coins) => {

      const result = await profileSchema.findOneAndUpdate(
        {
          guildId,
          userId,
        },
        {
          guildId,
          userId,
          $inc: {
            coins,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )


      shiftsCache[`${guildId}-${userId}`] = result.coins

      return result.coins
}

module.exports.getCoins = async (guildId, userId) => {
  const cachedValue = shiftsCache[`${guildId}-${userId}`]
  if (cachedValue) {
    return cachedValue
  }


      const result = await profileSchema.findOne({
        guildId,
        userId,
      })


      let coins = 0
      if (result) {
        coins = result.coins
      } else {
        await new profileSchema({
          guildId,
          userId,
          coins,
        }).save()
      }

      shiftsCache[`${guildId}-${userId}`] = coins

      return coins
}
