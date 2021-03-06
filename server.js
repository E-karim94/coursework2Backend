const express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();
var path = require('path');
const app = express();
app.use(express.json())



// load bodyParser module for json payload parsing


var urlencodeParser = bodyParser.urlencoded({extended:true})
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
console.log('collection name:', req.collection)
return next()
})



// dispaly a message for root path to show that API is working
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/accounts.html'));

})

app.post('/collections/:collectionName', urlencodeParser , (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    req.collection.insert(req.body, (e, results) => {
    if (e) return next(e)
    res.send(results.ops)
    })
    })
// retrieve all the objects from a collection
app.get('/collections/:collectionName',  (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
req.collection.find({}, { limit: 10, sort: [['price', -1]] }).toArray((e, results) => {
if (e) return next(e)
res.send(results)
})
})
app.get('/collectionName',  (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
req.collection.find({}, { limit: 10, sort: [['price', -1]] }).toArray((e, results) => {
if (e) return next(e)
res.send(results)
})
})
// add a lesson

// retrieve a lesson by mongodb ID
const ObjectID = require('mongodb').ObjectID;

app.get('/collections/:collectionName/:id', urlencodeParser, (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
console.log('searching json object with id:', req.params.id)
req.collection.findOne({ _id: new ObjectID(req.params.id) }, (e, result) => {
if (e) return next(e)
res.send(result)
})
})



// update a lesson by ID
app.put('/collections/:collectionName/:id',urlencodeParser, (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
req.collection.update({ _id: new ObjectID(req.params.id) },
{ $set: req.body },
{ safe: true, multi: false }, (e, result) => {
if (e) return next(e)
res.send((result.result.n === 1) ? { msg: 'success' } : { msg: 'error' })
})
})

// delete a lesson by ID
app.delete('/collections/:collectionName/:id', (req, res, next) => {
req.collection.deleteOne({ _id: ObjectID(req.params.id) }, (e, result) => {
if (e) return next(e)
res.send((result.result.n === 1) ? { msg: 'success' } : { msg: 'error' })
})
})

app.listen(3000, () => {
   console.log("Server is listening on port 3000");
})

