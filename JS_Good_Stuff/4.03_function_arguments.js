
//Argument arrays give functions acces to all the 
//arguments supplied in the invocation.


//For instance, using the add operator, you can calculate
//the sum for multiple number of paramaters.

var powerballSum = function () { 
	var i, powerballSum = 0;	                   //the initial value of the variable is set; in this case, 0			
	for (i = 0; i < arguments.length; i += 1) {   //a 'for' statement is used to generate a loop that will run the calculation to completion
		powerballSum += arguments[i];               
	}
	return powerballSum;							//the value of the calcuation is returned, and the function continues to run until it equals the argmuent.length
}

console.log(powerballSum(23, 25, 45, 52, 67, 2));  //returns 214


