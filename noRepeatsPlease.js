function permAlone(str) {
    permArr = []; // need these arrs to have global scope, but within function so FCC can read it. Can't be in the Permute function
    usedChars = [];
    
    var newArr = str.split('');
    var permutedArr = Permute(newArr);
    var strArr = [];

    for (var i =0; i<permutedArr.length; i++){
    	var temp = permutedArr[i].join('');
    	strArr.push(temp);
    }
    var strArrCorrected = [];
    for (var j=0; j<strArr.length; j++){
    	for (var k=0, count=0; k<strArr[j].length; k++){
    		if (strArr[j][k]===strArr[j][k+1]){
    			break;
    		} else {
    			count++;
    		}
    		if (count === strArr[j].length){
    			strArrCorrected.push(strArr[j])
    		}
    	}
    }
    return strArrCorrected.length;

}


function Permute(input){ // takes in array
    
	for (var i=0; i<input.length; i++){ // loops thru arr length
		var ch = input.splice(i,1)[0]; // // at position i, remove one, and spcify elements to add to arr
		usedChars.push(ch); // push a , b , a
		if (input.length === 0){ // doesn't go through here unless it is an empty arr
			permArr.push(usedChars.slice()); // 
		}
		Permute(input); // return [ b, a] first a is removed
		input.splice(i,0,ch); // 
		usedChars.pop();
	}
	return permArr;
};

console.log(permAlone('abcdefa'));
