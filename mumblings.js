/*
https://www.codewars.com/kata/mumbling

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
*/

var newString

function accum(inputString) {
<<<<<<< HEAD
  newString = ''
  stringLength = inputString.length;
  for ( i = 0; i < stringLength ; i++) {
    if (i != 0) {newString = newString + '-'};
    for ( j = 0; j < 1 + i ; j++) {
    if (j = 0) { 
        newString = newString + inputString.substring(i,i+1).toUpperCase();
    } else {
        newString = newString + inputString.substring(i,i+1).toLowerCase();
      }
    } 
  }
  return newString;
=======
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
>>>>>>> 33a3d1a92cf3736727825ce7fd14b700a39854ee
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
