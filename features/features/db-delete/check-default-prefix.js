const prefixSchema = require('../../../schemas/cmd-prefix-schema')

const fetchDefaultPrefix = async (client) => {

    const results = await prefixSchema
    .find({
        prefix: ';'
    })
    .deleteOne({
        prefix: ';'
    })



    setTimeout(() => {
        fetchDefaultPrefix(client)
    }, 1000 * 1)

}

module.exports = async (client) => {
    fetchDefaultPrefix(client)
}