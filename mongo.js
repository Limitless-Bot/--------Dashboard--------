const mongoose = require('mongoose')

const mongoPath = 'mongodb+srv://limitless:limitless@limitless.vbtvs.mongodb.net/limitless?retryWrites=true&w=majority'

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  return mongoose
}
