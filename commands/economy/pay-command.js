const Discord = require("discord.js")
const economy = require('../../economy-coins')
const profileSchema = require('../../schemas/profile-schema-money')

module.exports = {
    commands: 'pay',
    minArgs: 2,
    maxArgs: 2,
    expectedArgs: "pay <Target user's @> <Amount of money>",
    callback: async (message, arguments, text) => {
        const { guild, member } = message

        const guildId = message.guild.id
        const userId = message.author.id
        
        const target = message.mentions.users.first()
        if (!target) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`*Limitless*`)
            .setColor('#00ffff')
            .setDescription('Please specify someone to give money to.')

            message.channel.send(embed)
            return
        }

        const coinsToGive = arguments[1]
        if (isNaN(coinsToGive)) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`*Limitless*`)
            .setColor('RANDOM')
            .setDescription('Please provide a valid number of money to give.')

            message.channel.send(embed)
            return
        }

        const coinsOwner = await profileSchema.findOne(
            {
            guildId,
            userId,
            }
        )
        
        const coinsTarget = await profileSchema.findOne(
            {
            guildId,
            userId: target.id,
            }
        )


        const ownerCash = coinsOwner.coinsCash
        const targetCash = coinsTarget.coinsCash

        const cashOwner = ownerCash - coinsToGive
        const cashTarget = targetCash + coinsToGive * 1

        

        if (target.id === userId) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`*Limitless*`)
            .setColor('#00ffff')
            .setDescription(`You can not pay yourself.`)

            message.channel.send(embed)
            return
        }


        if (ownerCash < coinsToGive) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`*Limitless*`)
            .setColor('#00ffff')
            .setDescription(`You do not have ${coinsToGive} money!`)

            message.channel.send(embed)
            return
        }


        const reaminingCoins = await profileSchema.findOneAndUpdate(
            {
            guildId,
            userId,
            },
            {
            coinsCash: cashOwner
            }
        )
        const newBalance = await profileSchema.findOneAndUpdate(
            {
            guildId,
            userId: target.id,
            },
            {
            coinsCash: cashTarget
            }
        )

        const updatedBalance = await profileSchema.findOne(
            {
                guildId,
                userId: target.id,
            }
        )
        const reamainingBal = await profileSchema.findOne(
            {
                guildId,
                userId,
            }
        )


        
    const icon = guild.iconURL()
    const embed = new Discord.MessageEmbed()
    .setTitle(`*Limitless*`)
    .setThumbnail(icon)
    .setColor('#00ffff')
    .setDescription(`<@${userId}> has given <@${target.id}> $${coinsToGive}`)
    .addFields(
        {
            name: `${target.username} now has:`,
            value: `$${updatedBalance.coinsCash}`,
            inline: false
        },
        {
            name: `${message.author.username} now has:`,
            value: `$${reamainingBal.coinsCash}`,
            inline: false
        }
    )

    message.channel.send(embed)
    }
}

