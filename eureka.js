/* 

https://www.codewars.com/kata/take-a-number-and-sum-its-digits-raised-to-the-consecutive-powers-and-dot-dot-dot-eureka
steps: 
*/

/*calculation to check whether sum of digits (to the power of position) matches original


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
*/

/* calculation to take an array of numbers, check each number against array, and insert into new augented array


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

// function solution

function sum_dig_pow(a, b) {
	originalArray = [];
	for (i = a; i < b + 1; i++) {
	    originalArray.push(i);
    } 
    augArray = [];
    for (ii = 0; ii < originalArray.length; ii++) {
	    tempArray = originalArray[ii].toString().split("");
	    arraySum = 0;
	    for (iii = 0; iii < tempArray.length; iii++) {
		    arraySum = arraySum + Math.pow(tempArray[iii],iii+1);
		}
	    if (arraySum == originalArray[ii]) {
		    augArray.push(originalArray[ii]);
        }
    }
    return augArray
}


console.log(sum_dig_pow(1, 10));
console.log(sum_dig_pow(1, 100));
console.log(sum_dig_pow(10, 89));
console.log(sum_dig_pow(10, 100));
console.log(sum_dig_pow(90, 100));
console.log(sum_dig_pow(89, 135));


//  code academy bullshit

def sum_dig_pow(a, b): # range(a, b + 1) will be studied by the function
	originalArray = [];
	for (i = a; i < b + 1; i++) {
	    originalArray.push(i);
    } 
    augArray = [];
    for (ii = 0; ii < originalArray.length; ii++) {
	    tempArray = originalArray[ii].toString().split("");
	    arraySum = 0;
	    for (iii = 0; iii < tempArray.length; iii++) {
		    arraySum = arraySum + Math.pow(tempArray[iii],iii+1);
		}
	    if (arraySum == originalArray[ii]) {
		    augArray.push(originalArray[ii]);
        }
    }
    return augArray
    
function 


