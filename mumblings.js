/*
https://www.codewars.com/kata/mumbling

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
*/

var newString

function accum(inputString) {
	newString = ''
	stringLength = inputString.length;
	for ( i = 0; i < stringLength ; i++) {
		if (i != 0) {newString = newString + '-'};
		for (ii = 0; ii < i+1; ii++) {
		if (ii = 0) { 
			newString = newString + inputString.substring(i,i+1).toUpperCase();
		} else {
			newString = newString + inputString.substring(i,i+1).toLowerCase();
		} ;
	}
	return newString;
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
