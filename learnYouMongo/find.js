/* FIND.js
Here we will learn how to search for documents.

For all of the exercises, the database is learnyoumongo.
So, the url would be something like: mongodb://localhost:27017/learnyoumongo

Use the parrots collection to find all documents where age
is greater than the first argument passed to your script.

Using console.log, print the documents to stdout.
*/

var mongo = require('mongodb').MongoClient

mongo.connect('mongodb://localhost:27017/learnyoumongo',function(err, db) {
	// db gives access to the database
	if (err) throw err
	var parrots = db.collection('parrots')
	parrots.find({
		age: {
			$gt: +process.argv[2]
		}
	}).toArray(function(err,documents){
		if (err) throw err
		console.log(documents)
		db.close()
	})
})

