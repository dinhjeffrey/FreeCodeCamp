var fs = require('fs'); 
var myNumber = undefined;
var extension = undefined;

function addOne(callback){
     fs.readdir(process.argv[2], function doneReading(err, fileContents) {
          extension = process.argv[3];
          for (var i=0; i<fileContents.length; i++){
          	// what if extension was md and file was md? can only log if the file is example.md not just md. So length of content has to be longer than length of extension
            if (fileContents[i].slice(-extension.length) === extension && fileContents[i].length > extension.length) {
            	console.log(fileContents[i]);
            }
          }

          // myNumber = fileContents.toString().split('\n').length -1;
          callback();
     })
}

function logMyNumber(){
     // console.log("extension");
}

addOne(logMyNumber);