// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true }, (err, client) => {
   if (err) {
      return console.log('Unable to connect to MongoDB server');
   }

   console.log('Connected to MongoDB server');
   const db = client.db('TodoApp');

   // db.collection('Todos').findOneAndUpdate({
   //    _id: new ObjectID('5c540daec3e123db6db8157c')
   // }, {
   //    $set: {
   //       completed: true
   //    }
   // }, {
   //    returnOriginal: false
   // }).then((result) => {
   //    console.log(result)
   // });

   db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5c54199148c74d345b5d50ca')
   }, {
      $set: {
         name: 'María Carmen'
      },
      $inc: {age: 3}
   }, {
      returnOriginal: false
   }).then((result) => {
      console.log(result)
   });


   // client.close();
});