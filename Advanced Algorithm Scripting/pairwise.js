// we want the array arr to add up to equal arg
// can do as many pairs as possible
// add up all their indices and return

function pairwise(arr, arg) {
	for (var i=0, count=0; i<arr.length-1; i++){
		for (var j=i+1; j<arr.length; j++){
			if (arr[i] + arr[j] === arg){
				count+= i+j+1;
				arr.splice(j, 1);
			}
		}
	}
	if (count === 0) {
		return 0; // don't subtract 1 if no pair works
	}
	return count-1; // reduce last iteration count of +1
}

console.log(pairwise([], 100));

// done
