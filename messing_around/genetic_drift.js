src="https://d3js.org/d3.v4.min.js"

var p = 0.5;
var N = 10000;
var generations = 5000

function next_generation() {
	var draws = 2 * N;
	var a1 = 0;
	var a2 = 0;
	for (var i = 0; i < draws; i = i + 1) {
		if (Math.random() <= p) {
			a1 = a1 + 1
		}
		else {
			a2 = a2 + 1
		}
	}
	p =  a1 / draws;
}

function round_number(value, decimals) {
	var shifter = Math.pow(10,decimals);
	return Math.round(value * shifter) / shifter;
}

for (var i = 0; i < generations; i = i + 1) {
	next_generation();
	console.log("generation:", i, " :", round_number(p,4) * 100, round_number(1-p,4) * 100);
}