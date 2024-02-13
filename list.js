const client = require('./client')

async function init(){
    await client.lpush("items", 'apple')
    await client.lpush("items", 'bag')
    await client.lpush("items", 'cat')
    await client.lpush("items", 'dog')
    await client.lpush("items", 'eagle')
    // const result = await client.rpop('items')
    // const result = await client.blpop('items', 10)
        const result = await client.lrange('fruits', 0, 1)
    console.log({result});
}

init()