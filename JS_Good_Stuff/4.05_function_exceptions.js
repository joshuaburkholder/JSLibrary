//There are exceptions that may be thrown when a mishap occurs.


//The function below multiplies two numbers. Thus, it needs numbers!
var multiply = function (a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw {
			name: 'TypeError',
			message: 'multiply needs numbers!!'
		};
	}
	return a * b;
};

//When the function is called without those parameters, 
//an exception is thrown.

multiply();  //returns 'multiply needs numbers!!'

//If an exception is thrown within a 'try' statement,
//then the the catch message will be returned. 'try' 
//statements have a single "catch" for all exceptions.

var tryIt = function(){
	try { 
		luckyNumber("seven");
	} catch (e) {
		console.log(e.name + ': '+ e.message); 
	}
}

tryIt();  //returns "ReferenceError: luckyNumber is not defined."

