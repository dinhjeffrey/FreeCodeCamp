function findLongestWord(str) {
    
    var a = str.split(' ');
    console.log(a);
    var longest = null;
    for(var i=0; i<a.length; i++){
        // console.log(a[i].length);
        if (longest == null) {
            longest = a[i];
        }
        if (a[i].length > longest.length){
            longest = a[i];
            console.log(longest);
        }
        
    }
    
  return longest.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");