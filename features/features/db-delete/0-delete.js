
const shiftsSchema = require('../../../schemas/profile-schema')
const moneySchema = require('../../../schemas/profile-schema-money')

const fetchZeroShifts = async (client) => {

    const results = await shiftsSchema
    .find({
        coins: 0
    })
    .deleteOne({
        coins: 0
    })

    const results0 = await moneySchema
    .find({
        coinsBank: 0,
        coinsCash: 0,
    })
    .deleteOne({
        coinsBank: 0,
        coinsCash: 0,
    })

    setTimeout(() => {
        fetchZeroShifts(client)
    }, 1000 * 1)

}

module.exports = async (client) => {
    fetchZeroShifts(client)
}