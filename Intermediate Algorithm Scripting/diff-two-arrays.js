// test
var diffArray = (arr1, arr2) => {
  // Same, same; but different.
 var diff = arr1.filter( ele => {return arr2.indexOf(ele) === -1})
 var diff2 = arr2.filter( ele => {return arr1.indexOf(ele) === -1})
 
 return [...diff, ...diff2]

}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
