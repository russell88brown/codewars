var masterArray = []

function pushData(n) {
	dataArray = []
	for ( i=0; i < n ; i++) {
		dataArray.push(Math.floor(Math.random() * 10))
	}
	return dataArray
}

function repeate(r) {
	for (ii = 0; ii < r; ii++) {
		masterArray.push(pushData(Math.floor(Math.random() * 10 )));
	}
	return masterArray
}

console.log(repeate(100000))