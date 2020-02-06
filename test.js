
const express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();
var path = require('path');
const app = express();




// load bodyParser module for json payload parsing


var urlencodeParser = bodyParser.urlencoded({extended:false})
app.use(bodyParser.json())


// connect to MongoDB
const MongoClient = require('mongodb').MongoClient;
let db;

 MongoClient.connect('mongodb://127.0.0.1:27017/', (err, client) => {
 db = client.db('coursework')

 
})
app.param('collectionName', (req, res, next, collectionName) => {
    req.collection = db.collection(collectionName)
    console.log('collection name:', req.collection)
    return next()
    })



    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    
    })
const ObjectID = require('mongodb').ObjectID;

app.post('/collections/:collectionName',urlencodeParser, (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    req.collection.insert(req.body, (e, results) => {
    if (e) return next(e)
    res.send(results.ops)
    })
    })



app.put('/collections/:collectionName/:id', urlencodeParser, (req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id = req.params.id
    console.log (id+"hiii")
    console.log (req.body.topic)
    console.log (req.body.location)
    console.log (req.body)
    req.collection.updateOne({ _id: new ObjectID(req.params.id) },

{ $set:req.body},

{ safe: true, multi: false }, (e, result) => {
if (e) return next(e)
console.log(req.params)
res.send((result.result.n === 1) ? { msg: 'success' } : { msg: 'error' })
})
})
app.get('/collections/:collectionName',  (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
req.collection.find({}, { limit: 10, sort: [['price', -1]] }).toArray((e, results) => {
if (e) return next(e)
res.send(results)
})
})



//serach for courses by providers
app.get('/collections/:collectionName/:providers/:couseprovider/:provider',urlencodeParser, (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log('searching courses provided by:', req.params.provider)
    req.collection.findOne({ provider: req.params.provider }, (e, result) => {
        if (e) return next(e)
        res.send(result)
        
       

    })
})


//search for users by email
  app.get('/collections/:collectionName/:emails/:email',urlencodeParser, (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log('searching json object with email:', req.params.email)
    req.collection.findOne({ email: req.params.email }, (e, result) => {
        if (e) return next(e)
        res.send(result)
        console.log('searching json object with body:', req.body)

    })
})

//search by ID
app.get('/collections/:collectionName/:id', urlencodeParser, (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
console.log('searching json object with id:', req.params.id)
req.collection.findOne({ _id: new ObjectID(req.params.id) }, (e, result) => {
if (e) return next(e)

res.send(result)

})})

  
  


   

 // delete a lesson by ID
app.delete('/collections/:collectionName/:id',urlencodeParser, (req, res, next) => {
        req.collection.deleteOne({ _id: ObjectID(req.params.id) }, (e, result) => {
        if (e) return next(e)
        res.send((result.result.n === 1) ? { msg: 'success' } : { msg: 'error' })
        })
        })


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})


