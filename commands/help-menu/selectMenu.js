const Discord = require("discord.js")
const { MessageMenuOption, MessageMenu, MessageActionRow } = require("discord-buttons")
const loadCmds = require('../load-cmds')

module.exports = {
      commands: ['menu'],
      callback: (message, arguments, text, client) => {

        const cmds = loadCmds.cmds
        
        cmds.forEach((cmds) => {
              let {
                  commands,
                  category = '',
                  description = '',
                } = cmds
            })
            
          // Ensure the command and aliases are in an array
          if (typeof commands === 'string') {
            commands = [commands]
          }
        

        const option1 = new MessageMenuOption()
        .setLabel("Animals")
        .setEmoji('🐴')
        .setValue('animal')

        const option2 = new MessageMenuOption()
        .setLabel("Moderation")
        .setEmoji('⚠️')
        .setValue('mod')

        const reload = new MessageMenuOption()
        .setLabel("Reload")
        .setDescription("Reload the message")
        .setEmoji('403753127960117250')
        .setValue('reload')

        const menu = new MessageMenu()
        .setID('menu1')
        .setPlaceholder('Choose an option.')
        .addOption(option1)
        .addOption(option2)
        .addOption(reload)

        const Row1 = new MessageActionRow()
        .addComponent(menu)

        let embed = new Discord.MessageEmbed()
        .setTitle(`Limitless Help Menu`)
        .setColor('RANDOM')
        .setDescription('Please pick a category.')

        message.channel.send(embed, { components: [Row1] })

        const filter = ( button ) => button.clicker.user.id === message.author.id;

        client.on('clickMenu', async menu => {

            if (menu.values[0] == 'reload') {
                menu.message.update(embed)
                menu.message.reactions.cache.get('⬅️').users.remove()
                menu.message.reactions.cache.get('➡️').users.remove()
            }
        })

      }}