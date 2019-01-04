var promise=Promise.resolve('fulfilled');
var promise=Promise.reject('rejected');
promise.catch(function(err){
	console.error('Error');
	console.error(err);
});