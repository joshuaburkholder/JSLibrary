/*------------------ APPLY INVOCATION ---------------------*/

//The apply method allows us to construct an array of arguments.


//To illustration, begin my declaring a var that contains an array,
//and then creating a function to add them.

//Here we have a function (called add) that adds two numbers
var add = function(a,b) {
	return a + b;
};

//Now we create an array that contains two numbers
var array = [3.14, 0.577]

//We can now apply the function add, and use it to 
//add the two numbers in the array.
var bestNum = add.apply(null, array);

console.log(bestNum) //We see that when you combine Pi with Euler's Constant, 
//you get the bestNum

//**********function from previous example**********************//
var StateOfMind = function(string){  //function from previous file
	this.status = string;
};

StateOfMind.prototype.get_status = function(){
	return this.status;
};

//*************************************************************//

//We can also use apply to make an object with a status member.

var yourStatus = {
	status: "so good"
}

//yourStatus does not inherit from the StateOfMind.prototype.

console.log(StateOfMind.prototype);					//returns StateOfMind { get_status: [Function]}
console.log(yourStatus);							//returns {status: 'so good'}

//But we can invoke the get_status method on yourStatus,
// even though yourStatus does not have a get_status method!

var status = StateOfMind.prototype.get_status.apply(yourStatus);
console.log(status);								//returns 'so good'

