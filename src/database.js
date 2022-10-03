const { MongoClient } = require('mongodb')

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_DB } = process.env

const uri = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@mongo:27017`

const getDatabase = async () => {
    const client = new MongoClient(uri)

    await client.connect()

    return client.db(MONGO_DB)
}

module.exports = {
    getDatabase,
}
