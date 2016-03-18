 // Write a program that performs an HTTP GET request to a URL provided to you  
 //  as the first command-line argument. Write the String contents of each  
 //  "data" event from the response to a new line on the console (stdout).  

var http = require('http')

http.get(process.argv[2], function(response){
	response.setEncoding('utf8')
	response.on('data', console.log)
	response.on('error', console.error)
})

/* passing the function inline as anonymous function
response.on('data', function(data){ // anonymous function passed inline
    console.log(data);
});
*/

/* is the same as defining them outside and passing them by names
...
response.on('data', callback)
...
function callback(data){ // < named function defined outside
    console.log(data);
}
*/    