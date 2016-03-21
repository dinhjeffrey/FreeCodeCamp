/* FIND.js
Here we will learn how to search for documents but only fetch the fields
we need. Also known as projection in MongoDB

Use the parrots collection to find all documents where age
is greater than the first argument passed to your script.

The difference from the last lesson will be that we only want the
name and age properties

Using console.log, print the documents to stdout.

*/

var mongo = require('mongodb').MongoClient

mongo.connect('mongodb://localhost:27017/learnyoumongo',function(err, db) {
	// db gives access to the database
	if (err) throw err
	var parrots = db.collection('parrots')
	parrots.find({
		age: { $gt: +process.argv[2]}, 
	},{
			name: 1,
			age: 1,
			_id: 0		
	}).toArray(function(err,documents){
		if (err) throw err
		console.log(documents)
		db.close()
	})
})

