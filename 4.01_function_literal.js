
//Function objects are created with function literals...
//There are four parts to a function literal.

var birthYear = function(currentYear, age) {
	return currentYear - age;
};


//The FIRST part of a function literal is the reserved word "function".

//*****************e.g.****************************

/*var birthYear = */function/*(currentYear, age) {
	return currentYear - age;
};*/

//**************************************************

//The SECOND part of a function literal is the functions "name." 
//The name of the function can be used to call the function.
//The name may also play an important part in both the development
//and debugging processes.  

//In the example above, the function is said to be "anonymous." 
//The same function can be written with
//the name "calcBirthYear", as illustrated below:


//*****************e.g.****************************

/*function */calcBirthYear /*(currentYear, age) {
  return currentYear - age;
}*/

//**************************************************


//The THIRD part of a function is the "parameters."
//The parameters are wrapped in parenthesis, and separated by
//commas if there are multiple parameters. These will be defined
//as the variables of the function.

//*****************e.g.****************************

/*function calcBirthYear */(currentYear, age)/* {
  return currentYear - age;
}*/

//**************************************************

//The FOURTH part of a function are the statements, swaddled by {}.
//These are the statements that will be executed when the function
//is called.

//*****************e.g.****************************

/*function calcBirthYear (currentYear, age)*/ {
  return currentYear - age;
};

//**************************************************

//A function can appear anywere an expression may appear - even
//within another function, as illustrated in the morbid example below:

function yearOfFinalDemise (age){
	return (calcBirthYear(2017, age)) + (85);
}

yearOfFinalDemise(30);
