// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID,  } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to mongo db server');
    } 
    
    console.log('Connected to MongoDB server');
    /**
     * Delete Query 
     */

    /**
     * deleteMany
    */

    // db.collection('Todos').deleteMany({text: 'Test todo'}).then((result) => {
    //     console.log(result);
    // })

    /**
     * deleteOne
    */

    // db.collection('Todos').deleteOne({text: 'Test todo'}).then((result) => {
    //     console.log(result);
    // })

    /**
     * findOneAndDelete
    */

    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    })
});