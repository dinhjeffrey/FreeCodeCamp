var fs = require('fs'); 
var filterFn = require('./mymodule');
var dir = process.argv[2];
var filterStr = process.argv[3];


filterFn(dir, filterStr, function(err, list){
  if (err){
    return console.log('There was an error:', err);
  }
  list.forEach(function(file) {
    console.log(file)
  })
})



// Your submission results compared to the expected:

//                  ACTUAL                                 EXPECTED                
// ────────────────────────────────────────────────────────────────────────────────

//    "CHANGELOG.md"                      ==    "CHANGELOG.md"                     
//    "LICENCE.md"                        ==    "LICENCE.md"                       
//    "README.md"                         ==    "README.md"                        
//    ""                                  ==    ""                                 

// ────────────────────────────────────────────────────────────────────────────────

//   ✓  Submission results match expected  
   
//   ✓  Additional module file exports a single function  
   
//   ✓  Additional module file exports a function that takes 3 arguments  
   
//   ✓  Additional module file handles errors properly  
   
//   ✓  Additional module file handles callback argument  
   
//   ✓  Additional module file returned two arguments on the callback function  
   
//   ✓  Additional module file returned correct number of elements as the  
//   second argument of the callback  
   
//   ✓  Additional module file correctly handles '.'-prefixed extension  
   
//   ✓  Additional module file returned correct number of elements as the  
//   second argument of the callback  
   
//   ✓  Additional module file returned correct list of files as the second  
//   argument of the callback  
   
//   # PASS Your solution to MAKE IT MODULAR passed!  