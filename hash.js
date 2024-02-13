const client = require('./client')

async function init(){
    const fieldsAdded = await client.hset(
        'bike:1',
        {
            model: 'Deimos',
            brand: 'Ergonom',
            type: 'Enduro bikes',
            price: 4972,
        },
    )
    console.log(`Number of fields were added: ${fieldsAdded}`);

    const model = await client.hget('bike:1', 'model');
console.log(`Model: ${model}`);
// Model: Deimos

const price = await client.hget('bike:1', 'price');
console.log(`Price: ${price}`);
// Price: 4972

const bike = await client.hgetall('bike:1');
console.log(bike);
}

init()