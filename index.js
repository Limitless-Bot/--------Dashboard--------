const Discord = require('discord.js')
const client = new Discord.Client()

require('discord-buttons')(client)

const mongo = require('./mongo')
const config = require('./config.json')
const commandBase = require('./commands/command-base')
const loadCommands = require('./commands/load-commands')
const loadFeatures = require('./features/load-features')
const loadCmds = require('./commands/load-cmds')


client.on('ready', async () => {
  console.log('The client is ready!')
  client.user.setActivity(` ${client.guilds.cache.size} Servers | ${client.users.cache.size} Users`, { type: 'WATCHING' })

  await mongo()

  commandBase.loadPrefixes(client)
  loadCommands(client)
  loadFeatures(client)
  loadCmds(client)
})

client.login(config.token)