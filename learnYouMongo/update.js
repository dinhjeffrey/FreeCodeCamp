/*
Here we are going to update a document in the users collection.

The database name will be accessible via process.argv[2].

Say we have a user defined like:

    {
      "name": "Tina",
      "age": 30,
      "username": "tinatime"
    }

We want to change Tina's age from 30 to 40.

For the purpose of this lesson, assume that the username property is unique.
*/

var mongo = require('mongodb').MongoClient

mongo.connect('mongodb://localhost:27017/learnyoumongo',function(err, db) {
	// db gives access to the database
	if (err) throw err
	var users = db.collection('users')

	// document
	// { a: 2, b: 3 }
	users.update({
		username: "tinatime" 
	}, {
		$set: {
			age: 40
		}
	// document was updated
	// { a: 2, b: 1 }
	}, function(err){
		if (err) throw err
		db.close()
	})	
})