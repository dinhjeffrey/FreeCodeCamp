function titleCase(str) {

 var splitted = str.split(' ');
//splitted is the array version of the str divided by the word
var newArr = [];
console.log(splitted)
  for(var i = 0; i<splitted.length; i++){
      var placeHolder = splitted[i];
      placeHolder=placeHolder.charAt(0).toUpperCase() + placeHolder.slice(1).toLowerCase();
      console.log(placeHolder);
      newArr.push(placeHolder);

  }
  return newArr.join(' ');
}

titleCase("I'm a little tea pot");
// Free Code Camp Oc Is Off The Chain

// splitted[i][0].toUpperCase() + splitted[i].slice(1)

// ----

function titleCase(str) {

  return str
    .split(' ')
    .map(function (word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
    })
    .join(' ')
}

titleCase("I'm a little tea pot");


// ------
function titleCase(str) {

  return str
    .split(' ')
    .reduce(function (acc, item) { // declarative style
        return acc + item[0].toUpperCase() + item.slice(1).toLowerCase() + ' '
    }, '')
    //.join(' ')
}

titleCase("I'm a little tea pot");

