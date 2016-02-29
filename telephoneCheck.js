function telephoneCheck(str) {
	var strLength = str.length;
	for (var i=0, count=0;i<strLength;i++){
		if (isNaN(str[i]) === true && str[i]!=="-" && str[i]!=="(" && str[i]!==")"){
			return false;
		}
		if (str[i] === "("){
			if (str[i+4] !== ")"){
				return false;
			}
		}
		if (str[i] === ")"){
			if (str[i-4] !== "("){
				return false;
			}
		}
		if (str[i] === "0" || str[i] === "1" ||str[i] === "2" ||str[i] === "3" ||str[i] === "4" ||str[i] === "5" ||str[i] === "6" ||str[i] === "7" ||str[i] === "8" ||str[i] === "9"){
			count++;
		}		
		if (count === 11) {
			if (str[0] !== "1") {
				return false; // return true for if first number is 1 and total amount of numbers is 11
			} // because US telephone starts with 1
		}
	}
	if (count > 11 || count < 10){
			return false;
	}	
  return true;
}


console.log(telephoneCheck("2(757)622-7382"));