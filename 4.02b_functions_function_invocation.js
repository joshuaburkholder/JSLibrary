/*------------------ FUNCTION INVOCATION ---------------------*/

//When a function is not a property of an object, 
//then the function is simply invoked as a function.

//Here, doubleUp is introduced as a function:

var doubleUp = function(a){
	return a * 2;
};

//This function can be invoked in the assignment of var biggerNumber
//to double the any number, like a shortened version of Pi

var biggerNumber = doubleUp(3.14);

console.log(biggerNumber); //The result is we end up with twice as much Pi

//This invocation pattern binds the value to the global element. 
//In order to employ it as a method within a function, you would
//need to create a workaround.