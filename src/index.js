const express = require('express')
const { getConnection } = require('./db/connection')

const app = express()

app.get('/symbols', async (_, res) => {
    try {
        const db = await getConnection()
        const symbols = db.collection('symbols')

        const { symbols: data } = await symbols.findOne()

        res.json(data)
    } catch {
        res.statusCode(500).send('Internal error')
    }
})

app.get('/latest', async (_, res) => {
    try {
        const db = await getConnection()
        const latest = db.collection('latest')

        res.json(await latest.findOne())
    } catch {
        res.statusCode(500).send('Internal error')
    }
})

app.listen(3000)
