const Discord = require("discord.js")
const profileSchema = require('../../schemas/profile-schema-money')

module.exports = {
  commands: ['balance', 'bal'],
  maxArgs: 1,
  expectedArgs: "bal [Target user's @]",
  callback: async (message) => {
    const { guild } = message
    const target = message.mentions.users.first() || message.author

    

    const guildId = message.guild.id
    const userId = target.id


    const result = await profileSchema.findOne({
      guildId,
      userId,
    })


    if (result) {
      coinsBank = result.coinsBank
      coinsCash = result.coinsCash
    } else {
      await new profileSchema({
        guildId,
        userId,
        coinsBank: 0,
        coinsCash: 0,
      }).save()
    }

    const results = await profileSchema.findOne({
      guildId,
      userId,
    })

const Bank = results.coinsBank || 0
const Cash = results.coinsCash || 0


    let embed = new Discord.MessageEmbed()
.setAuthor(target.username, target.avatarURL())
.setTitle(`**__Balance__**`)
.setColor('#B026FF')
.setFooter('Powered by Limitless')
.addFields(
  {
    name: `Cash`,
    value: `$${Cash}`,
    inline: false,
  },
  {
    name: `Bank`,
    value: `$${Bank}`,
    inline: false,
  },
  {
    name: `Total`,
    value: `$${Bank + Cash}`,
    inline: false,
  },
)

message.channel.send(embed)
}}