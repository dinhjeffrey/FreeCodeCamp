/* COUNT
Here we will learn how to count the number of documents that
meet certain criteria.

Use the parrots collection to count all documents where age
is greater than the first argument passed to your script.

Using console.log, print the number to stdout.
*/

var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err,db){
	if (err) throw err
	var collection = db.collection('parrots')
	
	collection.count({
		age: {$gt: +process.argv[2]}
	}, function(err, docs){
		if (err) throw err
		console.log(docs)
		db.close()
	})
})