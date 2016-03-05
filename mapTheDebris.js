function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  // arr[0]["name"] = "poop";
  var newArr = [];
  
  for (var i =0; i<arr.length; i++){
  	var op = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[i]["avgAlt"], 3)/GM));	
  	newArr.push({name : arr[i]["name"], orbitalPeriod : op});
  }
  return newArr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
// [{name: "sputnik", orbitalPeriod: 86400}]
// T = 2*pi*sqrt{(radius + altitude)^3/ GM}


// done