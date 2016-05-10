/* Roman Numeral Converter
Convert the given number into a roman numeral.
*/

var convertToRoman = (num) => {
	var arr = num.toString().split('')
	return arr.map( (ele) => {
		// working from 1-10. TODO: to make it work from 1-100
		if (ele==='1')
			return 'I'
		else if (ele==='2')
			return 'II'
		else if (ele==='3')
			return 'III'
		else if (ele==='4')
			return 'IV'
		else if (ele==='5')
			return 'V'
		else if (ele==='6')
			return 'VI'
		else if (ele==='7')
			return 'VII'
		else if (ele==='8')
			return 'VIII'
		else if (ele==='9')
			return 'XI'
		else return 'X'
	} )
}

console.log(convertToRoman(36))