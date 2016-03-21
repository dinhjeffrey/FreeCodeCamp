/*
Create an Express.js server that processes PUT '/message/:id' requests.
*/

var express = require('express')
var app = express()

app.put('/message/:id', function(request, response) {
	var id = request.params.id
	var str = require('crypto')
	.createHash('sha1')
	.update(new Date().toDateString() + id)
	.digest('hex')
	response.send(str)
})

app.listen(process.argv[2])

