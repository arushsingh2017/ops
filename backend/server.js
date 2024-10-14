const {MongoClient}= require('mongodb')
const url= 'mongodb://0.0.0.0:27017';
const client= new MongoClient(url)

async function dbConnect(){
    // let result= client.connect()
    let result=  await client.connect();
    dbname=result.db('opstree')
    return dbname.collection('aa')
}

module.exports =dbConnect;