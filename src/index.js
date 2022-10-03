const express = require('express')
const { getDatabase } = require('./database')

const app = express()
const port = 3000

app.get('/', async (req, res) => {
    res.send('Hello world')
})

app.get('/users', async (req, res) => {
    try {
        const db = await getDatabase()

        const users = db.collection('users')
        const result = await users.find().toArray()

        res.send(result)
    } catch {
        res.send('error')
    }
})

app.listen(port)
