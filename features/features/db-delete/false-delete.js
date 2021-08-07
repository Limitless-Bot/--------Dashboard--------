const Discord = require("discord.js")

const clockInSchema = require('../../../schemas/clock-in-schema')
const muteSchema = require('../../../schemas/mute-schema')

const fetchFalse = async (client) => {

    const results = await clockInSchema
    .find({
        current: false
    })
    .deleteOne({
        current: false
    })

    const results0 = await muteSchema
    .find({
        current: false
    })
    .deleteOne({
        current: false
    })

    setTimeout(() => {
        fetchFalse(client)
    }, 1000 * 1)

}

module.exports = async (client) => {
    fetchFalse(client)
}