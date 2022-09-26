require('dotenv').config()
const mongoose = require('mongoose')
const Item = require('./models/Strain')



main().catch(err => console.log(err))
//getAll().then( (data) => console.log(JSON.stringify(data, null, 4))).catch(err => console.log(err))
//getLength().catch(err => console.log(err))
const rgdata = require('./data/rg.json')
insertData(rgdata).catch(err => console.log(err))

//deleteAll().then( () => console.log('absolutely nothing')).catch( err => console.log(err))
//getOnlyOne('6322b04ecc0023b1e809e5bd').catch(err => console.log(err))
async function main(){

    await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true}, (error) => callBackError(error))
}

function callBackError(error) {
    return error ? console.log(error) : console.log(`Connected to ${process.env.DB_NAME} database`)
}

async function getAll() {
 
    return await Item.find({}).limit(5)
}

async function getLength() {
    await Item.find({}).then( (data) => console.log(`There are ${data.length} entries in the db.`))
}
async function insertData(obj){
    await Item.insertMany(obj).then( () => console.log('all done inserting'))
}



async function deleteAll(){
    await Item.deleteMany({})
}

async function getOnlyOne(id){
    const item = await Item.findById(id)
    console.log(item)
}

