const express = require('express')
const app = express()
// load bodyParser module for json payload parsing
const bodyParser = require('body-parser')
app.use(bodyParser.json())
// connect to MongoDB
const MongoClient = require('mongodb').MongoClient;
let db;
MongoClient.connect('mongodb://127.0.0.1:27017/', (err, client) => {
db = client.db('coursework')
})
// get the collection name
app.param('collectionName', (req, res, next, collectionName) => {
req.collection = db.collection(collectionName)
// console.log('collection name:', req.collection)
return next()
})



app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})






       
     