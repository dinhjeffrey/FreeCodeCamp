/*
Connect to MongoDB on port 27017.
You should connect to the database named learnyoumongo and insert
a document into the docs collection.

The document should be a json document with the following properties:

  * `firstName`
  * `lastName`

firstName will be passed as the first argument to the lesson.

lastName will be passed as the second argument to the lesson.

Use console.log to print out the object used to create the document.

Make sure you use JSON.stringify convert it to JSON.
*/

var mongo = require('mongodb').MongoClient

mongo.connect('mongodb://localhost:27017/learnyoumongo',function(err, db) {
	// db gives access to the database
	if (err) throw err
	var docs = db.collection('docs')
	var obj = {
		firstName: process.argv[2],
		lastName: process.argv[3]
	}
	docs.insert(obj)
	console.log(JSON.stringify(obj))
	db.close()
})