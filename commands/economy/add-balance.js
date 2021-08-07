const Discord = require("discord.js")
const economy = require('../../economy-coins')

module.exports = {
  commands: ['addbalance', 'addbal'],
  minArgs: 2,
  maxArgs: 2,
  expectedArgs: "addbal <The target's @> <coin amount>",
  permissionError: 'You must be an administrator to use this command.',
  permissions: 'ADMINISTRATOR',
  callback: async (message, arguments) => {

    const mention = message.mentions.users.first()

    if (!mention) {
      message.reply('Please tag a user to add coins to.')
      return
    }

    const coinsCash = arguments[1]
    if (isNaN(coinsCash)) {
      message.reply('Please provide a valid numnber of coins.')
      return
    }

    const guildId = message.guild.id
    const userId = mention.id

    const newCoins = await economy.addCoinsCash(guildId, userId, coinsCash)


    let embed = new Discord.MessageEmbed()
.setAuthor(mention.username, mention.avatarURL())
.setTitle(`**__Economy System__**`)
.setColor('RANDOM')
.setFooter('Powered by Limitless')
.setDescription(`<@${message.author.id}> has added **\`$${coinsCash}\`** to <@${userId}> balance\n\nThey now have **\`$${newCoins}\`**`)
    
    message.channel.send(embed)
  },
}
