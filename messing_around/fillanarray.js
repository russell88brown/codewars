	sum = 0
	n = 10
	array = Array.apply(null, {length: n}).map(function(value, index){return index + 1;});
  	console.log(array)
  	for (i = 0; i < array.lenght; i++) {
  		console.log(i)
  		sum += array[i]
  	}
  	console.log(sum)