const Discord = require("discord.js")


module.exports = {
    commands: ['cat'],
    minArgs: 0,
    maxArgs: 0,
    category: 'Animal_1',
    expectedArgs: 'cat',
    example: 'cat',
    description: 'Shows a picture of a cat.',
    callback: (message, arguments, text) => {

        const catpics = [
            'https://tse1.mm.bing.net/th/id/OIP.ZtMqqTEzER-iigbSb5BmsAHaF7?w=217&h=180&c=7&o=5&pid=1.7',
            'https://tse4.mm.bing.net/th/id/OIP.QdEkrZjd1c_VN_aUtleoFgHaEo?w=278&h=180&c=7&o=5&pid=1.7',
            'https://tse1.mm.bing.net/th/id/OIP.L_Zs_r0OUe9jSGwj-EQXWQHaEo?w=261&h=180&c=7&o=5&pid=1.7',
            'https://tse4.mm.bing.net/th/id/OIP.KLM3xdRiTb_AkFxqogeqyAHaEo?w=300&h=187&c=7&o=5&pid=1.7',
            'https://tse4.mm.bing.net/th/id/OIP.VpLl15JCUH4wYA_VRjkxbAHaEo?w=267&h=180&c=7&o=5&pid=1.7',
            'https://tse2.mm.bing.net/th/id/OIP.6Yzm1M_F-A2ebcRL7ETMaAHaEo?w=285&h=180&c=7&o=5&pid=1.7',
            'https://tse3.mm.bing.net/th/id/OIP.x5S2cCT2-qMY_9exDAKpqwHaE1?w=212&h=180&c=7&o=5&pid=1.7',
            'https://tse1.mm.bing.net/th/id/OIP.UF33GkNrbrrhMGC1xo0_KwHaFB?w=301&h=203&c=7&o=5&pid=1.7',
            'https://tse3.mm.bing.net/th/id/OIP.jDQUZyC6soJvQUREh4bv3AHaEo?w=245&h=180&c=7&o=5&pid=1.7',
            'https://tse3.mm.bing.net/th/id/OIP.3lG47ruBLGWAFZSmn40gnQHaE7?w=231&h=180&c=7&o=5&pid=1.7',
            'https://tse2.mm.bing.net/th/id/OIP.bnQSPY3AWJng5TTEOEJotAHaLo?w=115&h=180&c=7&o=5&pid=1.7',
            'https://tse3.mm.bing.net/th/id/OIP.RpTVUtfWaP4TgYQV--v8QwHaFA?w=233&h=180&c=7&o=5&pid=1.7',
            'https://tse2.mm.bing.net/th/id/OIP.RPHpg6g4KBhrfe9u3SC59gHaEo?w=310&h=194&c=7&o=5&pid=1.7',
            'https://tse4.mm.bing.net/th/id/OIP._HWqX4W2r-57gZ661VV_kAHaEy?w=266&h=180&c=7&o=5&pid=1.7',
            'https://tse4.mm.bing.net/th/id/OIP.SPVqOnv0Nm2HGNuzIxkr9AHaEo?w=313&h=195&c=7&o=5&pid=1.7',
            'https://tse2.mm.bing.net/th/id/OIP.lbuSQSvBK5iwL_6XiLiX6wHaEK?w=260&h=180&c=7&o=5&pid=1.7',
            'https://tse2.mm.bing.net/th/id/OIP.qlhKOe4tAOve5P1hrSne4gHaFx?w=254&h=187&c=7&o=5&pid=1.7',
            'https://tse3.mm.bing.net/th/id/OIP.dpi2cfUhakUyvugxyfdW7AHaFj?w=275&h=206&c=7&o=5&pid=1.7',
            'https://tse3.mm.bing.net/th/id/OIP.-Lq9AHRTMQ_GhKDuWC0RrwHaFj?w=279&h=210&c=7&o=5&pid=1.7',
            'https://tse1.mm.bing.net/th/id/OIP.3Zbg5RQehq7l82LNuc1WOQHaEo?w=292&h=182&c=7&o=5&pid=1.7',
            'https://tse1.mm.bing.net/th/id/OIP.EhOcGxDbISDbkRVoPvsLIgHaE7?w=288&h=192&c=7&o=5&pid=1.7',
            'https://tse3.mm.bing.net/th/id/OIP.4wH2cxbL4CtTk3-SAPRHsAHaHa?w=192&h=192&c=7&o=5&pid=1.7',
            'https://tse2.mm.bing.net/th/id/OIP.cUUaP19Mo7y6GOkcpjk7rwHaE8?w=288&h=192&c=7&o=5&pid=1.7',
            'https://tse1.mm.bing.net/th/id/OIP.T6Y7p589uJGs3jg34ZFrJQHaEo?w=266&h=180&c=7&o=5&pid=1.7',
            'https://tse4.mm.bing.net/th/id/OIP.f4KYvpRp48NIUYuw7VxpGQHaIc?w=159&h=181&c=7&o=5&pid=1.7',
            'https://tse2.mm.bing.net/th/id/OIP.riWgTHsUTWPP6DdJLiYxYgHaEo?w=273&h=180&c=7&o=5&pid=1.7',
            'https://tse4.mm.bing.net/th/id/OIP.wqhmdZS8PASe43LGOsrs_AHaEK?w=274&h=180&c=7&o=5&pid=1.7',
            'https://tse4.mm.bing.net/th/id/OIP.Rw_JDNXw1ZkNXKUoTt5DngHaGu?w=200&h=182&c=7&o=5&pid=1.7',
            'https://tse4.mm.bing.net/th/id/OIP.MdoR9IUUU5oBoodwhZm0ngHaEK?w=258&h=180&c=7&o=5&pid=1.7',
            'https://tse3.mm.bing.net/th/id/OIP.qvlMRAZju0IvPvNXiIZGjwHaEo?w=285&h=180&c=7&o=5&pid=1.7',
            'https://tse3.mm.bing.net/th/id/OIP.41ELubhSDEXXJ1reVHFJgQHaE7?w=306&h=203&c=7&o=5&pid=1.7',
            'https://tse3.mm.bing.net/th/id/OIP.McRqhN1N30tj74RRBWTXSQHaEs?w=293&h=186&c=7&o=5&pid=1.7',
            'https://tse2.mm.bing.net/th/id/OIP.641zR94HxBmu8LryvhbQ9AHaFj?w=198&h=180&c=7&o=5&pid=1.7',
            'https://tse3.mm.bing.net/th/id/OIP.wQh3TmrT_NTa0P3R0YmBBQHaFk?w=215&h=180&c=7&o=5&pid=1.7',
        ]

        let embed = new Discord.MessageEmbed()
        .setTitle('**__Cat Picture__**')
        .setFooter(`${message.author.username}`)
        .setColor('RANDOM')
        .setImage(catpics[Math.floor(Math.random() * catpics.length)])

        message.channel.send(embed)
    }}