module.exports = client => {
    client.on('shardError', async (error, shardID) => {
        console.log(`error`, error)
        console.log(`shardID`, shardID)
    })
}