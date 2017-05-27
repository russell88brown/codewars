for ( var i = 0; i < 5; i = i + 1) {
var x = Math.round(Math.random() * 100) / 100;
if (x < 0.3) {
	console.log( x, '< 0.3');
}
else if ( x < 0.6) {
	console.log(x, "is >= 0.3 and < 0.6");
}
else {
console.log( x, '> 0.6');
}
}
