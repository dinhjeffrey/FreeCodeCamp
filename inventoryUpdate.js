function inventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    newArr = [];
    if (arr1.length === 0){
        arr1.push("remove");
    }
    if (arr2.length === 0){
        arr2.push("remove");
    }
    for (var i=0; i<arr1.length; i++){
        for (var j=0, count=0; j<arr2.length; j++){
            if (arr1[i][1] === arr2[j][1]){
                // update and combine. count doesn't increment
                newArr.push([arr1[i][0]+arr2[j][0], arr1[i][1]]);
            } else {
                count++;
            }

            if (count === arr2.length) {
                // add it as a new element to array
                newArr.push(arr1[i]);
            }
        }
    }
    for (var j=0; j<arr2.length; j++){
        for (var i=0, count=0; i<arr1.length; i++){
            if (arr2[j][1] !== arr1[i][1]){
                count++;
            }
            if (count === arr1.length){
                newArr.push(arr2[j]);
            }
        }
    }
    if (newArr[0] === 'remove'){
        newArr.shift();
    }
    if (newArr[newArr.length -1] === 'remove'){
        newArr.pop();
    }
    return newArr.sort(sortMultiDimensional);


}
function sortMultiDimensional(a,b)
{
    // for instance, this will sort the array using the second element 
    return a[1]>b[1];

}


// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(inventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) );
