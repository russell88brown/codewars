/*
https://www.codewars.com/kata/mumbling

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
*/

function accum(s) {
newString = ''
  stringLength = s.length;
  for ( i = 0; i < stringLength ; i++) {
    if (i != 0) {newString = newString + '-'};
    newString += s.substring(i,i+1).toUpperCase()
    for ( j = 0; j < i ; j++) { 
        newString += s.substring(i,i+1).toLowerCase()
    }
  }
  return newString;
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));

/*
top answer:
*/

function accumTop(s) {
  return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}

console.log(accumTop("abcd"));
console.log(accumTop("RqaEzty"));
console.log(accumTop("cwAt"));


