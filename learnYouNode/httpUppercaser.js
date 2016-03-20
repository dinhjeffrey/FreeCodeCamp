var http = require('http')
var fs = require('fs')
var map = require('through2-map')

var server = http.createServer(function (request,response){
  request.pipe(map(function(chunk){
	return chunk.toString().toUpperCase();
})).pipe(response)

})


server.listen(process.argv[2]);	

/* Other solution
var server = http.createServer(function (request,response) {
	response.writeHead(200, {'content-type': 'text/plain'})

	fs.createReadStream(process.argv[3]).pipe(response)
})
server.listen(process.argv[2])
*/