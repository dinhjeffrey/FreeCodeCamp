var fs = require('fs'); 
var contents = fs.readFileSync(process.argv[2]);
var lines = contents.toString().split('\n').length -1;

console.log(process.argv[2]);
     // note you can avoid the .toString() by passing 'utf8' as the  
     // second argument to readFileSync, then you'll get a String!  
     //  
     // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1 

// reads a file when is stored in the first argument, process.argv[2]
// counts how many /n or newlines there are, puts it in an array
// subtract 1, dunno why