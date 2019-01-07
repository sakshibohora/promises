function all(promise1,promise2){
	return new Promise(function(resolve,reject){
		//resolve('RESOLVED!');
	let counter=0;
	let arr=[];
	
	promise1.then(function(value){
			arr[0]=value;
			counter++;
			
			if(counter == 2){
				resolve(arr);
		}
	});
	
	promise2.then(function(value){
			arr[1]=value;
			counter++;
			
			if(counter == 2){
				resolve(arr);
		}
	});
});
}
all(getPromise1(), getPromise2()).then(console.log);


