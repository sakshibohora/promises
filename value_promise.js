function attachTitle(arg){
	let res='DR. '+arg;
	return res;
}
var promise=new Promise(function(resolve,reject){
	resolve('MANHATTAN');
});
promise.then(attachTitle).then(console.log);