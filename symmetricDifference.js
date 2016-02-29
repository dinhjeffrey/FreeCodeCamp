

function sym(args) {
	newArr = [];
	var argumentsLength = arguments.length;
	for (var i=0; i<argumentsLength; i++){
		var arr = arguments[i];
		var arrLength = arguments[i].length;

		for (var l=0;l<arrLength;l++){
			if (arr[l] === arr[l+1]){
				arr.splice(l, 1); // [1,2,5]
				l--; // -1
				arrLength--; //4 :: [1,1,2,3]
			}
		}
		var arrLengthNoDupes = arr.length;
		for (var j=0; j<arrLengthNoDupes; j++){
			if (newArr.indexOf(arr[j])>=0){
				var newArrLength = newArr.length;
				for (var k=0; k<newArrLength; k++){
					if (newArr[k] === arr[j]){
						newArr.splice(k,1); // takes out 1
					}
				}
			} else {
				newArr.push(arr[j]);
			} 		
		}
	}
	return newArr; // [3,5,4]	
}

console.log(sym([1, 1, 2, 2,5], [ 3, 2, 5], [3, 4, 2], [2,5]));