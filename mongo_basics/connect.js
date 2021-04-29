const {MongoClient} = require('mongodb')

const MONGO_URL = 'mongodb://localhost:27017'; //we access the mongodb over mongodb protocol and not over http so we write this url
const DB_NAME = 'tododb'; //write the db name if not present it will be created

//Async IIFE
(async ()=> {
    const client = await MongoClient.connect(MONGO_URL)
    const tododb = client.db(DB_NAME)

    console.log(tododb)
})()

// MongoClient will return a client promise and then on the promise we have called .db 