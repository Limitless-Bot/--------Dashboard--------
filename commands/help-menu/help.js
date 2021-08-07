const Discord = require("discord.js")
const loadCmds = require('../load-cmds')
const cmdBase = require('../command-base')

module.exports = {
      commands: ['help'],
      expectedArgs: '<Command Name>',
      callback: (message, arguments, text) => {

          if (!arguments[0]) {
              return
          }
 
        const cmds = loadCmds.cmds
        const prefix = cmdBase.prefix
        
        cmds.forEach((cmds) => {
              let {
                  commands,
                  category = '',
                  description = '',
                  expectedArgs = '',
                  example = '',
                  permissions = [],
                } = cmds

          if (typeof commands === 'string') {
            commands = [commands]
          }
          if (typeof permissions === 'string') {
            permissions = [permissions]
          }

          if (!category) {
            category = 'No category found.'
        }
        if (permissions[0]) {
            permissions = `\`${permissions.join(' | ')}\``
        }
        if (!permissions[0]) {
            permissions = 'No required permission.'
          }
          if (!description) {
            description = 'No description found.'
          }
          if (!example) {
            example = 'No example found.'
          }
          if (!expectedArgs) {
            expectedArgs = 'Nothing found.'
          }


          for (const command of commands) {
                
                if (command === arguments[0].toLowerCase()) {
                    let embed = new Discord.MessageEmbed()
                    .setTitle('__Help Menu__')
                    .setColor('RANDOM')
                    .addFields(
                        {
                            name: 'Command',
                            value: commands.join(' | '),
                        },
                        {
                            name: 'Expected Arguments',
                            value: `${prefix}${expectedArgs}`,
                        },
                        {
                          name: 'Example',
                          value: `${prefix}${example}`,
                        },
                        {
                            name: 'Description',
                            value: description,
                        },
                        {
                          name: 'Permission Required',
                          value: permissions,
                        },
                        {
                            name: 'Category',
                            value: category,
                        }
                    )

                    message.channel.send(embed)
                }
            }
            });

      }}