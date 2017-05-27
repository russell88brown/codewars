// for clause for number of groups to display
for (var i2 = 0; i2 < 50; i2 = i2 + 1) {
var repeates = 10000000
var	sum = 0
// for to calculate the value of number of repeats
for (var i = 0; i < repeates; i = i +1) {
sum = sum + Math.random();
}
var average = sum / repeates;
console.log('The average is', average);
}
console.log('end')
console.log('with: ', i2, ' lots of ', repeates, ' calculations');
		
