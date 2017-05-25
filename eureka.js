/* 

https://www.codewars.com/kata/take-a-number-and-sum-its-digits-raised-to-the-consecutive-powers-and-dot-dot-dot-eureka
steps: 
*/

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



