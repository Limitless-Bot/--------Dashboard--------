const Discord = require("discord.js")
const axios = require('axios')

module.exports = {
    commands: ['elephant'],
    expectedArgs: 'elephant',
    minArgs: 1,
    maxArgs: 1,
    category: 'Animal_1',
    expectedArgs: 'elephant',
    example: 'elephant',
    description: 'Shows a picture of a elephant.',
    callback: (message, arguments, text) => {


        const random = arguments


        axios
        .get('https://elephant-api.herokuapp.com/elephants/sex/male')
        .then((res) => {
            console.log('RES:', res.data[1])
            message.channel.send(
`Index: ${arguments[0]}\nName: ${res.data[random].name}\nSpecies: ${res.data[random].species}\nSex: ${res.data[random].sex}\nDOB: ${res.data[random].dob}\nAbout ${res.data[random].name}: ${res.data[random].note}`)
        })
        .catch((err) => {
            console.error('ERR:', err)
        })
    }}