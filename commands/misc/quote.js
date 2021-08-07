const Discord = require("discord.js")

module.exports = {
    commands: ['quote','insipiration'],
    expectedArgs: 'quote',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
    
        const pics = [
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2018/01/08095502/walt-disney-the-best-way-to-get-started.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2018/01/08095506/winston-churchill-the-pessimist-sees-difficulty.jpg',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2018/01/08095511/will-rodger-dont-let-yesterday.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2018/01/08095456/you-learn-more-from-failure.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2018/01/08095452/vince-lombardi-its-not-whether-you-get-knocked-down.jpg',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2018/01/08095447/steve-jobs-if-you-a-working-on-something.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2018/01/08095426/rob-siltanen-people-who-are-crazy-enough-to-change-the-world.jpg',
            'https://s3.amazonaws.com/media.briantracy.com/blog/quotes/og-mandino-failure-will-never-overtake-me.jpg',
            'https://s3.amazonaws.com/media.briantracy.com/blog/quotes/mohnish-pabrai-entreprenuers-are-great-at-dealing-with-uncertainty.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/quotes/maya-angelou-we-may-encounter-defeats-but-we-must-not-be-defeated.jpg',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2018/01/08095422/johann-von-goethe-knowing-is-not-enough.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2018/01/08095417/imagine-your-life-is-perfect-in-every-respect.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/quotes/henry-link-we-generate-fears-while-we-sit.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2018/01/08095412/henry-ford-whether-you-think-you-can.jpg',
            'https://s3.amazonaws.com/media.briantracy.com/blog/quotes/hellen-keller-seurity-is-mostly-a-superstition.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/quotes/hasidic-proverb-the-man-who-has-confidence-in-himself.jpg',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2018/01/08095403/franklin-roosevelt-limit-to-realization-of-tomorrow.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/quotes/einstein-creativity-is-intelligence-having-fun.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/quotes/don-zimmer-what-you-lack-in-talent.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/quotes/do-what-you-can-with-all-you-have.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/quotes/develop-an-attitude-of-gratitude.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/quotes/cs-lewis-never-too-old-to-set-another-goal.jpg',
            'https://s3.amazonaws.com/media.briantracy.com/blog/quotes/confucious-to-see-what-is-right.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/quotes/brian-tracy-reading-is-to-the-mind.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/quotes/brian-tracy-fake-it-till-you-make-it.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/quotes/the-future-belongs-to-the-competent.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2015/12/07130213/Jack-Canfield-For-every-reason-inspirational-quote.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2015/12/07130220/John-Wooden-Things-Work-out-inspirational-quote.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2015/12/07130224/Marcus-Tullius-Cicero-a-room-without-books-inspirational-quote.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2015/12/07130230/Michael-Phelps-i-think-goals-inspirational-quote.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2015/12/07130235/Michelle-Obama-One-of-the-lessons-inspirational-quote.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2015/12/07130239/Rober-H-Schuller-Todays-Accomplishments-were-inspirational-quote.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2015/12/07130244/Steve-Jobs-The-Only-Way-inspirational-quote.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2015/12/07130251/Zig-Ziglar-You-Dont-Have-inspirational-quote.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2015/12/07130208/Brian-tracy-motivational-quotes.png',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2015/12/07130204/brian-tracy-inspirational-quote.jpg',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2016/11/19111645/Brian-Tracy-Integrity-is-The.jpg',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2016/11/19112854/Brian-Tracy-Leadership-is-The-e1523982582769.jpg',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2016/11/19113439/Brian-Tracy-Leaders-Set-High.jpg',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2016/11/19130119/Leadership-Quotes-Clarity-is-The.jpg',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2016/11/19131049/Leadership-Quotes-The-Best-Leaders.jpg',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2016/11/19131733/Leadership-Quotes-Leaders-Think-And.jpg',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2016/11/19131851/Leadership-Quotes-The-Key-Responsibility.jpg',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2016/11/19115423/Brian-Tracy-The-Effective-Leader.jpg',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2016/11/19115932/Brian-Tracy-Leaders-Never-Use.jpg',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2016/11/19132321/Leadership-Quotes-Practice-Golden-Rule.jpg',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2016/11/19132717/Leadership-Quotes-Superior-Leaders-Are.jpg',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2016/11/19132853/Leadership-Quotes-Leaders-Are-Anticipatory.jpg',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2016/11/19133004/Leadership-Quotes-The-True-Test.jpg',
            'https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2016/11/19133121/Leadership-Quotes-Leaders-Concentrate-Single.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/3-inspiring-quotes-for-motivation.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/quotescover-JPG-36.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/4f6a8bfed86690209e54fc1c0cfd023e-682x1024.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/45142190c6cc85a9ca9bf61638472e1e.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/8bdb7a98a27fa4fa4379f25260fb2875.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/changeplannotgoal.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/b6b42a2e82c8504ae5219f91a48ca0d8.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/8d6d92ad2ce0c6cf3e377587af327c001.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/77dbf1c75a6c1653c5e7b2d67c984937.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/howardruffitwasntrainingwhen.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/6a39f2c7e5381da251960d8b325d5256.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/TwnbAIWtk_0.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/97ce33d0ec4d3e2b5f916c9c7c659361.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/billiejeankingchampionskeepplaying.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/youwillsucceed_chalk-703x1024.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/5114142704_db1ce7e8ce_b.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/EmilysQuotes.Com-moving-on-intelligence-comfort1.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/gandhiyoumustbethechange.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/4569de9810690cd7049de94e856b7750.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/Untitled-1-673x1024.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/Albert-Einstein-quote-on-living-a-happy-life.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/grass-is-greener-where-you-water-it.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/quote2.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/your-next-vacation-seth-godin.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/good-quote.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/2619e0ae06e85f6f404a3aa413f4e30e.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/BumbLOiCYAAoKck-1.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/wordesteelauder.jpg',
            'https://cdn.lifehack.org/wp-content/uploads/2014/12/Untitled-2.jpg',
            'https://i.pinimg.com/736x/b5/fb/b6/b5fbb66acc83cb5c984e6e9c9e8a793f.jpg',
            'https://i.pinimg.com/originals/62/ac/71/62ac71a51c9923e1ae212a376ca7b38e.jpg',
            'https://www.goalcast.com/wp-content/uploads/2017/11/Dumbledore-quote-Happiness-can-be-found-even-in-the-darkest-of-times-if-one-only-remembers-to-turn-on-the-light-1068x561.jpg',
            'https://everydaypower.com/wp-content/uploads/2019/05/famous-movie-quotes-about-the-past.jpg',
            'http://callingdreams.com/wp-content/uploads/2015/03/dead-poets-society-quotes.jpg',
            'https://cdn.motivationgrid.com/wp-content/uploads/2013/10/Jeff_Bridges_Quote_Tron.jpg',
            'https://cdn.motivationgrid.com/wp-content/uploads/2013/10/MEl_Gibson_QUote_Braveheart.jpg',
            'http://picsmine.com/wp-content/uploads/2017/01/Movie-Quotes-It-Takes-A-Great-Deal-Of-Bravery-To-Stand-Up-To-Your-Enemies.jpg',
            'https://quotes4ever.com/wp-content/uploads/2017/10/32da67d8d0e9170ae2f79b6e664ebb54-willy-wonka-quotes-the-playroom.jpg',
            'https://cdn.motivationgrid.com/wp-content/uploads/2013/10/Rafiki_Lion_Heart_Quote1.jpg',
            'https://en.bcdn.biz/Images/2016/8/26/3cf774b5-bc29-4338-8f2d-fd62beb46b18.jpg',
            'https://images.yourstory.com/cs/1/777b5d30-3b40-11e9-889e-edaf6b4b2ce8/lord-of-the-ring1556191676165.jpg',

        ]

        let embed = new Discord.MessageEmbed()
            .setTitle('**__Inspirational Quote__**')
            .setFooter(`${message.author.username}`)
            .setColor('RANDOM')
            .setImage(pics[Math.floor(Math.random() * pics.length)])
    
            message.channel.send(embed)
        }}