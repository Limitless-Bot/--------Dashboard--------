const Discord = require("discord.js")
const pop = require("popcat-wrapper")
const { MessageEmbed } = require("discord.js")



module.exports = {
      commands: ['hex-colour', 'hex-color'],
      expectedArgs: 'hex-colour <hex colour>',
      minArgs: 1,
      maxArgs: null,
      callback: async (message, args, text) => {

        let color = args[0]
    if(!color) return message.channel.send('Please provide a hex code!')
    if(color.includes("#")) {
      color = color.split("#")[1]
    }
    try {
    const info = await pop.colorinfo(color)
    
      const embed = new MessageEmbed()
      .setTitle("Colour Info")
      .addField('Name', info.name, true)
      .addField('Hex', info.hex, true)
      .addField('RGB', info.rgb, true)
      .addField('Brighter Shade', info.brightened, true)
      .setImage(info.color_image)
      .setColor(info.hex)
      message.channel.send(embed)
    } catch (error) {
      return message.channel.send("Invalid Colour!")
    }
  }
}
      