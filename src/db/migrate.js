const { getConnection } = require('./connection')

// Creating symbols collection
const symbols = async (connection) => {
    await connection.createCollection('symbols')

    const symbols = connection.collection('symbols')

    await symbols.insertOne({
        symbols: {
            AED: 'United Arab Emirates Dirham',
            AFN: 'Afghan Afghani',
            ALL: 'Albanian Lek',
            AMD: 'Armenian Dram',
        },
    })
}

// Creating latest collection
const latest = async (connection) => {
    await connection.createCollection('latest')

    const latest = connection.collection('latest')

    await latest.insertOne({
        date: '2022-10-01',
        rates: {
            AED: 0.01661,
            AFN: 0.016941,
            ALL: 0.87,
            AMD: 12.114,
        },
    })
}

// Main migration
const migrate = async () => {
    try {
        const connection = await getConnection()

        await symbols(connection)
        await latest(connection)

        console.log('Migrations have been processed successfully')
    } catch {
        console.error('Fail when processing migrations')
    }
}

migrate().finally(() => process.exit())
