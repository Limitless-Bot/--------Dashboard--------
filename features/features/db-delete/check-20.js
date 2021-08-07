const timeSchema = require('../../../schemas/shift-time')

const fetch20 = async (client) => {

    const results = await timeSchema
    .find({
        time: 20
    })
    .deleteOne({
        time: 20
    })



    setTimeout(() => {
        fetch20(client)
    }, 1000 * 10)

}

module.exports = async (client) => {
    fetch20(client)
}