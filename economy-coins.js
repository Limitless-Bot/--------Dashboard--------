const { Mongoose } = require('mongoose')
const mongo = require('./mongo')
const profileSchema = require('./schemas/profile-schema-money')

const coinsCache = {} // { 'guildId-userId': coins }

module.exports = (client) => {}


module.exports.addCoinsCash = async (guildId, userId, coinsCash) => {

      const result = await profileSchema.findOneAndUpdate(
        {
          guildId,
          userId,
        },
        {
          guildId,
          userId,
          $inc: {
            coinsCash,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )


      coinsCache[`${guildId}-${userId}`] = result.coinsCash

      return result.coinsCash
}


module.exports.getCoinsBank = async (guildId, userId) => {
  const cachedValue = coinsCache[`${guildId}-${userId}`]
  if (cachedValue) {
    return cachedValue
  }


      const result = await profileSchema.findOne({
        guildId,
        userId,
      })

      let coinsBank = 0 
      let coinsCash = 0
      if (result) {
        coinsBank = result.coinsBank
      } else {
        await new profileSchema({
          guildId,
          userId,
          coinsBank,
          coinsCash,
    
          
        }).save()
      }

      const results = await profileSchema.findOne({
        guildId,
        userId,
      })

      coinsCache[`${guildId}-${userId}`] = coinsBank

      return results
}



module.exports.getCoinsCash = async (guildId, userId) => {
  const cachedValue = coinsCache[`${guildId}-${userId}`]
  if (cachedValue) {
    return cachedValue
  }


      const result = await profileSchema.findOne({
        guildId,
        userId,
      })


      let coinsCash = 0
      let coinsBank = 0
      if (result) {
        coinsCash = result.coinsCash
      } else {
        await new profileSchema({
          guildId,
          userId,
          coinsCash,
          coinsBank,
        }).save()
      }

      coinsCache[`${guildId}-${userId}`] = coinsCash

      return coinsCash
}
