function add(a,b) {
    return a+b;
}

function once(callback, ...outerArgs){
    hasRun = false;

	return function(...innerArgs) {
		if(!hasRun) {
			hasRun = true;
			return callback(...(innerArgs.concat(outerArgs)))
		} else {
			return 'This function only runs once!'
		}
	} 
}

