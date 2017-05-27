// Coin toss function
function toss_coins() {
var coins = 10;
var heads = 0;
var tails = 0;

// Throwing the dice
for(var i = 0; i < coins; i = i + 1) {
	if (Math.random() <= 0.5) {
		heads = heads + 1
	}
	else {
		tails = tails + 1
	}
}

// Did heads = 8
if (heads == 8) {
	return true;
}
else{
	return false}
}

// number of times to run the print
for (var ii = 0; ii < 10; ii = ii + 1) {
var repeats = 50000000;
var counter = 0;
for (var i = 0; i < repeats; i = i + 1) {
	var desired_outcome = toss_coins();
	if (desired_outcome) {
		counter = counter + 1;
	}	
}
console.log("getting 8 heads, 2 tails", (counter / repeats) * 100 , "% of the time");
}