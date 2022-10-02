const express = require('express')
const { MongoClient } = require('mongodb')

const app = express()
const port = 3000

app.get('/', async (req, res) => {
  res.send('Hello world')
})

app.get('/users', async (req, res) => {
  const getUsers = async () => {
      try {
          const client = new MongoClient(`mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@mongo:27017`)

          await client.connect()
          console.log('MongoDB is connected');

          const fixer = client.db('fixer')
          const users = fixer.collection('users');

          const result = await users.find().toArray()

          res.json(result)
      } catch(e) {
          console.error(e)

          res.send('error')
      }
  }

  getUsers()
})

app.listen(port)