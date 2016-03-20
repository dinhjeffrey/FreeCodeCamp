/* HTTP Collect
Write a program that performs an HTTP GET request to a URL provided to you  
  as the first command-line argument. Collect all data from the server (not  
  just the first "data" event) and then write two lines to the console  
  (stdout).  
   
  The first line you write should just be an integer representing the number  
  of characters received from the server. The second line should contain the  
  complete String of characters sent by the server.  
*/

var http = require('http')

http.get(process.argv[2], function(response){
	response.setEncoding('utf8')
	response.on('data', callback)
	var result = "";
	function callback(data){ // < named function defined outside
		result += data;
	}
	response.on('end', log)
	function log(data){
		console.log(result.length);
		console.log(result);
	}	

})

/*
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function(response){
	response.pipe(bl(function (err, data) {
	if (err)
		return console.log(err)
	data = data.toString()
	console.log(data.length)
	console.log(data)
	}))
})
*/