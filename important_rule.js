function alwaysThrows(){
	throw "OH NOES";
}
function iterate(arg){
			console.log(arg);
		return arg + 1;	
}
Promise.resolve(iterate(1)).then(iterate).
then(iterate).then(iterate).then(iterate).then(alwaysThrows).then(null,console.log);