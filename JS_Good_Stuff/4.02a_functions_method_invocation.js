
/*------------------ METHOD INVOCATION ---------------------*/


//A method is a function stored as a property within an object, and
//it is bound to that object. 

//Below, is an object catLives
//the value of the catLives is an increment method (which contains an optional parameter);

var catLives = {
  value: 9,
  increment: function(inc) {
    this.value += inc === 'number' ? inc : -1;
  }
};

console.log((catLives.value)) //Returns 9 


//When an invocation uses the dot operator (or a subscript expression),
// it is invoked as a method. 

catLives.increment();  //This invokes the function (which has an increment of -1)

console.log((catLives.value));  //The value of catLives now returns 8.

//The increment method takes an option parameter.
//If the argumenet is not a number, then 1 is used as default.
