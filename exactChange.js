function drawer(price, cash, cid) {
  var arr = [ [ 'PENNY', 0 ],
  [ 'NICKEL', 0 ],
  [ 'DIME', 0 ],
  [ 'QUARTER', 0 ],
  [ 'ONE', 0 ],
  [ 'FIVE', 0 ],
  [ 'TEN', 0 ],
  [ 'TWENTY', 0 ],
  [ 'ONE HUNDRED', 0 ] ];
  var change = cash - price;
  var count = 0;
  while (change > 0){
	  if (change >= 100 && arguments[2][8][1] >= 100){
	  	// use 100's
	  	change-= 100;
	  	arguments[2][8][1] -= 100;
	  	arr[8][1]+=100;

	  } else if (change >=20 && arguments[2][7][1] >= 20) {
	  	// use 20's

	  	change-= 20;
	  	arguments[2][7][1] -= 20;
	  	arr[7][1]+=20;

	  } else if (change >=10 && arguments[2][6][1] >= 10) {
	 	// use 10's
	 	change-= 10;
	  	arguments[2][6][1] -= 10;
	  	arr[6][1]+=10;

	  } else if (change >=5 && arguments[2][5][1] >= 5) {
	  	// use 5's
	  	change-= 5;
	  	arguments[2][5][1] -= 5;
	  	arr[5][1]+=5;

	  } else if (change >=1 && arguments[2][4][1] >= 1){
	  	// use 1's

	  	change-= 1;
	  	arguments[2][4][1] -= 1;
	  	arr[4][1]+=1;

	  } else if (change >=0.25 && arguments[2][3][1] >= 0.25){
	  	// use quarters
	  	change-= 0.25;
	  	arguments[2][3][1] -= 0.25;
	  	arr[3][1]+=0.25;

	  } else if (change >=0.10 && arguments[2][2][1] >= 0.10){
	  	// use dimes
	  	change-= 0.10;
	  	arguments[2][2][1] -= 0.10;
	  	arr[2][1]+=0.10;

	  } else if (change >=0.05 && arguments[2][1][1] >= 0.05){
	  	// use nickels
	  	change-= 0.05;
	  	arguments[2][1][1] -= 0.05;
	  	arr[1][1]+=0.05;

	  } else if (change >0 && arguments[2][0][1] >= 0.01){
	  	// use pennies
	  	change-= 0.01;
	  	change = parseFloat(change).toFixed(2);
	  	arguments[2][0][1] -= 0.01;
	  	arguments[2][0][1] = parseFloat(arguments[2][0][1]).toFixed(2);
	  	arr[0][1]+=0.01;
	  	arr[0][1] = Number((arr[0][1]).toFixed(2)); // have to use Number toFixed b/c pennies wasn't rounding correctly


	  } else {
	  	return "Insufficient Funds"
	  }
	}
	  for (var a=0; a<arr.length; a++){ // take out anything that has 0
	  	if (arr[a][1] === 0){
	  		arr.splice(a, 1);
	  		a--;
	  	}
	  }
	  for (var b=0, count=0; b<arguments[2].length; b++){
	  	if (arguments[2][b][1] === 0){
	  		count++;
	  	}
	  	if (count === 8){
	  		return "Closed";
	  	}
	  }
	  
  return arr.reverse();
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

console.log(drawer(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
