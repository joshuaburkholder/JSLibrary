/*------------------ CONSTRUCTOR INVOCATION -----------------*/

//Create a constructor function (called StateOfMind) that
//makes an object with a status property.

//NOTE: Convention keeps that constructors (functions intended 
//to be used with the new prefix) are always capitalized!! 

var StateOfMind = function(string){
	this.status = string;
};

//Now we can give StateOfMind a public method called get_status

StateOfMind.prototype.get_status = function(){
	return this.status;
};

//Declaring a variable, we make an instance of StateOfMind

var myMind = new StateOfMind("confused");

//We can now see how this constructor is operating at various levels:

console.log(StateOfMind);  							//returns [Function: StateOfMind]
console.log(StateOfMind.prototype);					//returns StateOfMind {get_status [Function]}
console.log(StateOfMind.prototype.get_status);		//returns [Function]
console.log(myMind.get_status());  					//returns confused. an apt place to end.
