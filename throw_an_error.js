function parsePromised(path){
	return promise= new Promise(function(resolve,reject){
		try{
			resolve(JSON.parse(path))
   		 }catch (e) {
      		reject(e.message);
    		}
	});
};
parsePromised(process.argv[2]).then(null,console.log);