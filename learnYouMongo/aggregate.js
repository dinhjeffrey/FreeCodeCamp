/* AGGREGATE
Next up is aggregation. Aggregation allows one to do things like
calculate the sum of a field of multiple documents or the average
of a field of documents meeting particular criteria.

Say you have a collection named prices. Each price document is modeled
like so:

    {
      "name": "Tshirt",
      "size": "S",
      "price": 10,
      "quantity": 12
      "meta": {
        "vendor": "hanes",
        "location": "US"
      }
    }

In this exercise, we need to calculate the average price for all documents in prices
that have the size that will be passed as the first argument to your script.

Use console.log() to print the average price rounded to 2 decimal places
to stdout after you have found it.
*/


var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'


var match = { $match: { status: 'A' } }


mongo.connect(url, function(err,db){
	if (err) throw err
	var collection = db.collection('prices')
	
	collection.aggregate([
		{ $match: {size: process.argv[2] }},
		{ $group: {
			_id: 'average', 
			total: {$avg: '$price'}
		}}	
	]).toArray(function(err, results) {
		if (err) throw err
		console.log(parseFloat(results[0].total).toFixed(2))
		db.close()
	})
})


// done