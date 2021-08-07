const Discord = require("discord.js")
const cBase = require('../command-base')
const axios = require('axios')


module.exports = {
      commands: ['docs'],
      expectedArgs: 'docs <documentation search query>',
      minArgs: 1,
      maxArgs: null,
      callback: async (message, arguments, text) => {
    
        const prefix = cBase.prefix
        const text2 = message.content.replace(`${prefix}docs `, '')


        const uri = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(
          text2
          )}`

        axios
        .get(uri)
        .then((embed) => {
          const { data } = embed

          if (data && !data.error) {
            message.channel.send({ embed: data })
          } else {
            message.reply('Could not find that documentation!')
          }
        

        })

        .catch(err => {
          console.error(err)
        })



      }}