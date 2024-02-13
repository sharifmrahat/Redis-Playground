const client = require('./client')

async function init(){
    await client.set("user:104", "Ryan Dahl")
    await client.expire("user:104", 10)
    const result = await client.get("user:104")
    console.log({result});
}

init()