var fir=first();
var sec=fir.then(function(val){
	return second(val);
});
sec.then(console.log);