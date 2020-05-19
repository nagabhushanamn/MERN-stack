var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'shop_db';

router
    .delete('/:id', (req, res, next) => {
        let itemId = req.params.id
        const client = new MongoClient(url, { useNewUrlParser: true });
        client.connect((err) => {
            const db = client.db(dbName);
            const collection = db.collection('inventory');
            collection
                .findOneAndDelete({ _id: ObjectID(itemId) }, (err, result) => {
                    if (err) throw err
                    res.json(result)
                })
        })
    })
    .put('/:id', (req, res, next) => {
        let itemId = req.params.id
        let itemName = req.body.item
        const client = new MongoClient(url, { useNewUrlParser: true });
        client.connect((err) => {
            const db = client.db(dbName);
            const collection = db.collection('inventory');
            collection
                .findOneAndUpdate({ _id: ObjectID(itemId) }, { $set: { item: itemName } }, (err, result) => {
                    if (err) throw err
                    res.json(result)
                })
        })

    })
    .get('/', (req, res, next) => {
        let tag = req.query.tag
        const client = new MongoClient(url, { useNewUrlParser: true });
        client.connect((err) => {
            const db = client.db(dbName);
            const collection = db.collection('inventory');
            collection
                .find({ tags: [tag] })
                .project({ item: 1, _id: 0 })
                .toArray((err, result) => {
                    if (err) throw err
                    res.json(result);
                    client.close()
                })
        })

    })
    .post('/', function (req, res, next) {
        let items = req.body
        const client = new MongoClient(url, { useNewUrlParser: true });
        client.connect((err) => {
            const db = client.db(dbName);
            const collection = db.collection('inventory');
            collection.insertMany(items, (err, result) => {
                if (err) throw err
                res.json(result);
                client.close()
            })
        })
    });

module.exports = router;
