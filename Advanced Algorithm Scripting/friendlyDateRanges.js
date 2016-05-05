function friendly(arr) {
	var listMonths = [
	{"01" : "January"},
	{"02" : "February"},
	{"03" : "March"},
	{"04" : "April"},
	{"05" : "May"},
	{"06" : "June"},
	{"07" : "July"},
	{"08" : "August"},
	{"09" : "September"},
	{"10" : "October"},
	{"11" : "November"},
	{"12" : "December"}
	];
	var listDays = [
	{"01" : "1st"},
	{"02" : "2nd"},
	{"03" : "3rd"},
	{"04" : "4th"},
	{"05" : "5th"},
	{"06" : "6th"},
	{"07" : "7th"},
	{"08" : "8th"},
	{"09" : "9th"},
	{"10" : "10th"},
	{"11" : "11th"},
	{"12" : "12th"},
	{"13" : "13th"},
	{"14" : "14th"},
	{"15" : "15th"},
	{"16" : "16th"},
	{"17" : "17th"},
	{"18" : "18th"},
	{"19" : "19th"},
	{"20" : "20th"},
	{"21" : "21st"},
	{"22" : "22nd"},
	{"23" : "23rd"},
	{"24" : "24th"},
	{"25" : "25th"},
	{"26" : "26th"},
	{"27" : "27th"},
	{"28" : "28th"},
	{"29" : "29th"},
	{"30" : "30th"},
	{"31" : "31st"},
	];
	var newArr = [];
	if (arr[0] === arr[1]){ // same year, month, and day
		// return an arr with only 1 day: [M D, Y]
		// month
		for (var i=0; i<listMonths.length; i++){
			if (arr[0].slice(5,7) === Object.keys(listMonths[i]).join()){ // 01 === 01
				newArr.push(listMonths[i][arr[1].slice(5,7)]);
			}
		}
		// day
		for (var j=0; j<listDays.length; j++){
			if (arr[0].slice(8, arr[0].length) === Object.keys(listDays[j]).join()) { //07 === 07
				newArr[0] += " " + listDays[j][arr[1].slice(8, arr[1].length)] + ", ";
			}
		}
		newArr[0] += arr[0].slice(0,4);
	} else if (arr[0].slice(0,4) === arr[1].slice(0,4) && arr[0].slice(5,7) === arr[1].slice(5,7)) { // same year, month
		// return arr with 1 month and 2 days: [M D, D] 

		// month
		for (var i=0; i<listMonths.length; i++){
			if (arr[0].slice(5,7) === Object.keys(listMonths[i]).join()){ // 01 === 01
				newArr.push(listMonths[i][arr[1].slice(5,7)]);
			}
		}
		// day
		for (var j=0; j<listDays.length; j++){
			if (arr[0].slice(8, arr[0].length) === Object.keys(listDays[j]).join()) { //07 === 07
				newArr[0] += " " + listDays[j][arr[0].slice(8, arr[0].length)];
			}
		}
		// day
		for (var j=0; j<listDays.length; j++){
			if (arr[1].slice(8, arr[1].length) === Object.keys(listDays[j]).join()) { //07 === 07
				newArr.push(listDays[j][arr[1].slice(8, arr[1].length)]);
			}
		}		

	} else if (arr[0].slice(0,4) === arr[1].slice(0,4)) { // same year
		// return 2 months and 2 days: [M D Y, M D]

		// month
		for (var i=0; i<listMonths.length; i++){
			if (arr[0].slice(5,7) === Object.keys(listMonths[i]).join()){ // 01 === 01
				newArr.push(listMonths[i][arr[0].slice(5,7)]);
			}
		}
		// day
		for (var j=0; j<listDays.length; j++){
			if (arr[0].slice(8, arr[0].length) === Object.keys(listDays[j]).join()) { //07 === 07
				newArr[0] += " " + listDays[j][arr[0].slice(8, arr[0].length)];
			}
		}
		newArr[0] += ", " + arr[0].slice(0,4);
		// month 
		for (var i=0; i<listMonths.length; i++){
			if (arr[1].slice(5,7) === Object.keys(listMonths[i]).join()){ // 01 === 01
				newArr.push(listMonths[i][arr[1].slice(5,7)]);
			}
		}
		// day
		for (var j=0; j<listDays.length; j++){
			if (arr[1].slice(8, arr[0].length) === Object.keys(listDays[j]).join()) { //07 === 07
				newArr[1] += " " + listDays[j][arr[1].slice(8, arr[1].length)];
			}
		}
	} else if (arr[0].slice(0,4) === (arr[1].slice(0,4)-1).toString()) { // 1 year apart
		if (arr[0].slice(5,7) < arr[1].slice(5,7)) { // 2nd month is greater
			// return [M D, Y, M D, Y]
			// month
			for (var i=0; i<listMonths.length; i++){
				if (arr[0].slice(5,7) === Object.keys(listMonths[i]).join()){ // 01 === 01
					newArr.push(listMonths[i][arr[0].slice(5,7)]);
				}
			}
			// day
			for (var j=0; j<listDays.length; j++){
				if (arr[0].slice(8, arr[0].length) === Object.keys(listDays[j]).join()) { //07 === 07
					newArr[0] += " " + listDays[j][arr[0].slice(8, arr[0].length)];
				}
			}
			newArr[0] += ", " + arr[0].slice(0,4);
			// month 
			for (var i=0; i<listMonths.length; i++){
				if (arr[1].slice(5,7) === Object.keys(listMonths[i]).join()){ // 01 === 01
					newArr.push(listMonths[i][arr[1].slice(5,7)]);
				}
			}
			// day
			for (var j=0; j<listDays.length; j++){
				if (arr[1].slice(8, arr[0].length) === Object.keys(listDays[j]).join()) { //07 === 07
					newArr[1] += " " + listDays[j][arr[1].slice(8, arr[1].length)];
				}
			}
			newArr[1] += ", " + arr[1].slice(0,4);
		
		} else if (arr[0].slice(5,7) === arr[1].slice(5,7) && arr[0].slice(8, arr[0].length) < arr[1].slice(8, arr[0].length)) { // months are equal, 2nd day is greater or equal
			// return [M D, Y, M D, Y]
			// month
			return 'hi'
			for (var i=0; i<listMonths.length; i++){
				if (arr[0].slice(5,7) === Object.keys(listMonths[i]).join()){ // 01 === 01
					newArr.push(listMonths[i][arr[0].slice(5,7)]);
				}
			}
			// day
			for (var j=0; j<listDays.length; j++){
				if (arr[0].slice(8, arr[0].length) === Object.keys(listDays[j]).join()) { //07 === 07
					newArr[0] += " " + listDays[j][arr[0].slice(8, arr[0].length)];
				}
			}
			newArr[0] += ", " + arr[0].slice(0,4);
			// month 
			for (var i=0; i<listMonths.length; i++){
				if (arr[1].slice(5,7) === Object.keys(listMonths[i]).join()){ // 01 === 01
					newArr.push(listMonths[i][arr[1].slice(5,7)]);
				}
			}
			// day
			for (var j=0; j<listDays.length; j++){
				if (arr[1].slice(8, arr[0].length) === Object.keys(listDays[j]).join()) { //07 === 07
					newArr[1] += " " + listDays[j][arr[1].slice(8, arr[1].length)];
				}
			}

		} else if (arr[0].slice(5,7) > arr[1].slice(5,7)){ // 1st month greater
			// [M D, M D]
			for (var i=0; i<listMonths.length; i++){
				if (arr[0].slice(5,7) === Object.keys(listMonths[i]).join()){ // 01 === 01
					newArr.push(listMonths[i][arr[0].slice(5,7)]);
				}
			}
			// day
			for (var j=0; j<listDays.length; j++){
				if (arr[0].slice(8, arr[0].length) === Object.keys(listDays[j]).join()) { //07 === 07
					newArr[0] += " " + listDays[j][arr[0].slice(8, arr[0].length)];
				}
			}
			// month 
			for (var i=0; i<listMonths.length; i++){
				if (arr[1].slice(5,7) === Object.keys(listMonths[i]).join()){ // 01 === 01
					newArr.push(listMonths[i][arr[1].slice(5,7)]);
				}
			}
			// day
			for (var j=0; j<listDays.length; j++){
				if (arr[1].slice(8, arr[0].length) === Object.keys(listDays[j]).join()) { //07 === 07
					newArr[1] += " " + listDays[j][arr[1].slice(8, arr[1].length)];
				}
			}		


		} else if (arr[0].slice(5,7) === arr[1].slice(5,7) && arr[0].slice(8, arr[1].length) <= arr[1].slice(8, arr[0].length)){ // 1 year apart, same month, the 1st day is smaller. over a year

			// return [M D, Y, M D]
			for (var i=0; i<listMonths.length; i++){
				if (arr[0].slice(5,7) === Object.keys(listMonths[i]).join()){ // 01 === 01
					newArr.push(listMonths[i][arr[0].slice(5,7)]);
				}
			}
			// day
			for (var j=0; j<listDays.length; j++){
				if (arr[0].slice(8, arr[0].length) === Object.keys(listDays[j]).join()) { //07 === 07
					newArr[0] += " " + listDays[j][arr[0].slice(8, arr[0].length)];
				}
			}
			newArr[0] += ", " + arr[0].slice(0,4);
			// month 
			for (var i=0; i<listMonths.length; i++){
				if (arr[1].slice(5,7) === Object.keys(listMonths[i]).join()){ // 01 === 01
					newArr.push(listMonths[i][arr[1].slice(5,7)]);
				}
			}
			// day
			for (var j=0; j<listDays.length; j++){
				if (arr[1].slice(8, arr[0].length) === Object.keys(listDays[j]).join()) { //07 === 07
					newArr[1] += " " + listDays[j][arr[1].slice(8, arr[1].length)];
				}
			}
			newArr[1] += ", " + arr[1].slice(0,4);
		} else { // 1 year apart, same month, 1st day is bigger
			// return [M D, Y, M D]
			for (var i=0; i<listMonths.length; i++){
				if (arr[0].slice(5,7) === Object.keys(listMonths[i]).join()){ // 01 === 01
					newArr.push(listMonths[i][arr[0].slice(5,7)]);
				}
			}
			// day
			for (var j=0; j<listDays.length; j++){
				if (arr[0].slice(8, arr[0].length) === Object.keys(listDays[j]).join()) { //07 === 07
					newArr[0] += " " + listDays[j][arr[0].slice(8, arr[0].length)];
				}
			}
			newArr[0] += ", " + arr[0].slice(0,4);
			// month 
			for (var i=0; i<listMonths.length; i++){
				if (arr[1].slice(5,7) === Object.keys(listMonths[i]).join()){ // 01 === 01
					newArr.push(listMonths[i][arr[1].slice(5,7)]);
				}
			}
			// day
			for (var j=0; j<listDays.length; j++){
				if (arr[1].slice(8, arr[0].length) === Object.keys(listDays[j]).join()) { //07 === 07
					newArr[1] += " " + listDays[j][arr[1].slice(8, arr[1].length)];
				}
			}

		}
				
	} else { // greater than 1 years
		// return [M D, Y, M D, Y]
		// month
			for (var i=0; i<listMonths.length; i++){
				if (arr[0].slice(5,7) === Object.keys(listMonths[i]).join()){ // 01 === 01
					newArr.push(listMonths[i][arr[0].slice(5,7)]);
				}
			}
			// day
			for (var j=0; j<listDays.length; j++){
				if (arr[0].slice(8, arr[0].length) === Object.keys(listDays[j]).join()) { //07 === 07
					newArr[0] += " " + listDays[j][arr[0].slice(8, arr[0].length)];
				}
			}
			newArr[0] += ", " + arr[0].slice(0,4);
			// month 
			for (var i=0; i<listMonths.length; i++){
				if (arr[1].slice(5,7) === Object.keys(listMonths[i]).join()){ // 01 === 01
					newArr.push(listMonths[i][arr[1].slice(5,7)]);
				}
			}
			// day
			for (var j=0; j<listDays.length; j++){
				if (arr[1].slice(8, arr[0].length) === Object.keys(listDays[j]).join()) { //07 === 07
					newArr[1] += " " + listDays[j][arr[1].slice(8, arr[1].length)];
				}
			}
			newArr[1] += ", " + arr[1].slice(0,4);
	}

  return (newArr);
}





console.log(friendly(["2022-09-05", "2023-09-04"]));





// end