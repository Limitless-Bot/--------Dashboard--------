const Discord = require("discord.js")
const loadCmds = require('../../../commands/load-cmds')

module.exports = async (client) => {

    setTimeout(() => {

        const cmds = loadCmds.cmds
    
        let animal_1 = new Map()
        let animal_2 = new Map()
        let animal_3 = new Map()
        let animal_4 = new Map()

    cmds.forEach((cmds) => {
        let {
            commands,
            category = '',
            description = '',
          } = cmds

          if (typeof commands === 'string') {
            commands = [commands]
          }

          if (category === 'Animal_1') {
            animal_1.set(commands, description)
          }
          if (category === 'Animal_2') {
            animal_2.set(commands, description)
          }
          if (category === 'Animal_3') {
            animal_3.set(commands, description)
          }
          if (category === 'Animal_4') {
            animal_4.set(commands, description)
          }
      })

       
        let embed1 = new Discord.MessageEmbed()
            .setTitle('🐴 __Animal Commands__ 🐴')
            .setColor('RANDOM')
        let embed2 = new Discord.MessageEmbed()
            .setTitle('🐴 __Animal Commands__ 🐴')
            .setColor('RANDOM')
        let embed3 = new Discord.MessageEmbed()
        .setTitle('🐴 __Animal Commands__ 🐴')
        .setColor('RANDOM')
        

        animal_1.forEach((animal_1, key) => {
            embed1
            .addField(key.join(' | '), animal_1)
        })
        animal_2.forEach((animal_2, key) => {
            embed2
            .addField(key.join(' | '), animal_2)
        })
        animal_3.forEach((animal_3, key) => {
            embed3
            .addField(key.join(' | '), animal_3)
        })

        let current = 0

        const embeds = [
            embed1,
            embed2,
            embed3,
        ]

        client.on('clickMenu', async menu => {
            if (menu.values[0] == 'animal') {
                menu.message.update(embed1)
                current = 1
                menu.message.react('⬅️').then(menu.message.react('➡️'))
            }
            if (menu.values[0] == 'back') {

                current = current - 1

                if (current === -1) {
                    current = 2
                }

                menu.message.update(embeds[current])
            }
            if (menu.values[0] == 'forward') {

                current = current + 1

                if (current === 3) {
                    current = 0
                }

                menu.message.update(embeds[current])
            }
          })

}, 1000)
    
       }
