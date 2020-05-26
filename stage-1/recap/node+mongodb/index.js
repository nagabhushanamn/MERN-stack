

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb+srv://user1:user11@cluster0-socov.mongodb.net/dashboard?retryWrites=true&w=majority';


// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err, client) {
    assert.equal(null, err);
    const db = client.db('dashboard');
    // // Insert a single document
    // db.collection('tech-stack').insertOne({ title: 'MERN-stack' }, function (err, r) {
    //     assert.equal(null, err);
    //     assert.equal(1, r.insertedCount);
    //     // Insert multiple documents
    //     db.collection('courses').insertMany([{ title: 'Mongo' }, { title: 'Express' }, { title: 'react.js' }, { title: 'Node.js' }], function (err, r) {
    //         assert.equal(null, err);
    //         assert.equal(4, r.insertedCount);
    //         client.close();
    //     });
    // });

    db.collection('courses').find({},function(err,result){
        result.forEach(function(course){
            console.log(course.title)
            client.close();
        })
    })

});