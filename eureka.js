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

// calculation to take an array of numbers, check each number against array, and insert into new augented array


var originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50, 77, 32, 89]
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






