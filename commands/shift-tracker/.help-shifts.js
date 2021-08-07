const Discord = require("discord.js")
const cBase = require('../command-base')

module.exports = {
    commands: ['help-shifts'],
    expectedArgs: 'help-shifts',
    minArgs: 0,
    callback: async (message, arguments, text) => {


      const prefix = cBase.prefix

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Shift Help Commands__**')
        .setFooter(`${message.author.username}`)
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/815210618428588053/815210678896951296/image0.png')
        .setDescription(`[Support Server](https://discord.gg/SbNs7CexP6) **|** [Invite](https://discord.com/api/oauth2/authorize?client_id=814913860900749333&permissions=8&scope=bot) **|** [Website](https://limitless-d1eafe.webflow.io/)\n**${prefix}report** (Reports a problem to developers) \n\n**The following commands will show you the bots shift commands:**`)
        .addFields({
        name: `${prefix}set-shifts-lb`,
        value: `Send this command in the channel you want the bot to show the shifts leaderboard, it will update every minute, **NEED PERMISSION: \`ADMINISTRATOR)\`**`,
        inline: false
    },
    {
      name: `${prefix}remove-shifts-lb`,
      value: `Send this command in the channel you want the bot to remove the shifts leaderboard from, **NEED PERMISSION: \`ADMINISTRATOR)\`**`,
      inline: false
    },
    {
      name: `${prefix}set-shift-time`,
      value: `Sets the how long the shifts are in **Minutes only!**, **NEED PERMISSION: \`ADMINISTRATOR)\`**`,
      inline: false
    },
    {
      name: `${prefix}set-shift-max-users`,
      value: `Sets the how people can be clocked in at once, **NEED PERMISSION: \`ADMINISTRATOR)\`**`,
      inline: false
    },
    {
      name: `${prefix}shift-lb`,
      value: `Shows the shift leaderboard.`,
      inline: false
    },
    {
      name: `${prefix}shifts <@user>`,
      value: `Shows you how many shifts that user has done`,
      inline: false
    },
    {
      name: `${prefix}reset-shifts <@user>`,
      value: `Will reset the mentioned users shift count back to 0, **NEED PERMISSION: \`ADMINISTRATOR)\`**`,
      inline: false
    },
    {
      name: `${prefix}clock-in`,
      value: `Posts an embed with the time you clocked in`,
      inline: false
  },
  {
      name: `${prefix}clock-out`,
      value: `Posts an embed with the time you clocked out and automatically tracks the shift for you!`,
      inline: false
  },
  {
      name: `${prefix}cancel-clock-in`,
      value: `Cancels your clock in and doesn\'t add shift.`,
      inline: false
  },
  {
      name: `${prefix}force-clock-out`,
      value: `Forces the bot to clock out even if your shift is not over.`,
      inline: false
  },
  {
    name: `${prefix}clear-user <user ID>`,
    value: `Clears the shifts amount for the user id given, useful for if they have left the server`,
    inline: false
},
{
  name: `${prefix}remove-shifts <@user> <amount>`,
    value: `Removes that amount of shifts from the mentioned user`,
    inline: false
},
{
      name: `${prefix}add-shifts <@user> <amount>`,
      value: `(E.g. ${prefix}add-shifts @noob 1) This will add the amount of shifts to that user, **NEED PERMISSION: \`ADMINISTRATOR\`**`,
      inline: false
    }
    )
        
        message.channel.send(embed)



    }}