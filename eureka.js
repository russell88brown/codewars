/*
Code Academy - Take a Number And Sum Its Digits Raised To The Consecutive Powers And [does it equal the original number]....¡Eureka!

https://www.codewars.com/kata/take-a-number-and-sum-its-digits-raised-to-the-consecutive-powers-and-dot-dot-dot-eureka
steps: 
*/

// function solution - my answer
console.log('my answer')

function sumDigPow(a, b) {
  var originalArray = [];
	for (var i = a; i < b + 1; i++) {
	    originalArray.push(i);
    } 
    var augArray = [];
    for (var ii = 0; ii < originalArray.length; ii++) {
	    var tempArray = originalArray[ii].toString().split("");
	    var arraySum = 0;
	    for (var iii = 0; iii < tempArray.length; iii++) {
		    arraySum = arraySum + Math.pow(tempArray[iii],iii+1);
		}
	    if (arraySum == originalArray[ii]) {
		    augArray.push(originalArray[ii]);
        }
    }
    return augArray
}

console.log(sumDigPow(1, 10000000));


// answer one - issue with syntax
console.log('code wars answer 1')

function sumDigPowAnswerOne(a, b) {
  var ans = [];
  while(a <= b){
    if(a.toString().split('').reduce((x,y,i)=>x + +y ** (i + 1),0) == a)
      ans.push(a);
    a++;
  }
  return ans;
}

console.log(sumDigPowAnswerOne(1, 10000000));


//answer two - issue with syntax
console.log('codewars answer 2')

function filterFunc(n) {
  return `${n}`.split("").map((x, i) => x ** (i+1)).reduce((a, b) => a+b) == n;
}

function *range(a, b) {
  for (var i = a; i <= b; ++i) yield i;
}

function sumDigPowAnswerTwo(a, b) {
  return Array.from(range(a, b)).filter(filterFunc);
}

console.log(sumDigPowAnswerTwo(1,10000000))


/*Worikings

//calculation to check whether sum of digits (to the power of position) matches original


originalNumber = 135
tempArray = [1,3,5]
arraySum = 0
augArray = []

for (i = 0; i < tempArray.length; i++) {
	arraySum += Math.pow(tempArray[i],i+1);
	}
console.log('arraySum: ' + arraySum + ' - ' + 'original number: ' + originalNumber);
if (arraySum = originalNumber) {
	augArray.push(originalNumber);
}

console.log(augArray)

//calculation to take an array of numbers, check each number against array, and insert into new augented array


originalArray = [1,2,3,4,5,6,7,8,9,77,89,130,140];
tempArray = [];
arraySum = [];
augArray =[];



for (i = 0; i < originalArray.length; i++) {
	tempArray = originalArray[i].toString().split("");
	console.log('tempArray for calc: ' + tempArray)
	arraySum = 0
	for (ii = 0; ii < tempArray.length; ii++) {
		arraySum = arraySum + Math.pow(tempArray[ii],ii+1);
		console.log('array sum step #' + ii + " - " + 'running sum: ' + arraySum)
	}
	console.log('arraySum: ' + arraySum + ' - ' + 'original number: ' + originalArray[i]);
	if (arraySum == originalArray[i]) {
		console.log('yes')
		augArray.push(originalArray[i]);
	} else {
		console.log('no')
	}
}
console.log(augArray);


//completed formula
originalArray = [];
tempArray = [];
arraySum = [];
augArray =[];

var a = 1
var b = 500

for (i = a; i < b + 1; i++) {
	originalArray.push(i);
}
console.log(originalArray);
console.log('!!! Created Array between a and b !!!');

for (ii = 0; ii < originalArray.length; ii++) {
	tempArray = originalArray[ii].toString().split("");
	console.log('tempArray for calc: ' + tempArray)
	arraySum = 0
	for (iii = 0; iii < tempArray.length; iii++) {
		arraySum = arraySum + Math.pow(tempArray[iii],iii+1);
		console.log('array sum step #' + iii + " - " + 'running sum: ' + arraySum)
	}
	console.log('arraySum: ' + arraySum + ' - ' + 'original number: ' + originalArray[ii]);
	if (arraySum == originalArray[ii]) {
		console.log('yes')
		augArray.push(originalArray[ii]);
	} else {
		console.log('no')
	}
}
console.log(augArray);

*/


