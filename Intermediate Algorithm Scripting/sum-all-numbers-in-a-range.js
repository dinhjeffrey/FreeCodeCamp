/* Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/

let sumAll = (arr) => {
  var sum = 0 
  for (let i=Math.min(...arr); i<=Math.max(...arr); i++ ) {
    sum += i
  }
  return sum
}

sumAll([1, 4])