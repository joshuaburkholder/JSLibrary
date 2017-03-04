//Curring is a way to increase arity by combining a function and an argument.
//Currying can be integrated with callbacks to create a factory of functions.

//Using a greeting example, function b is returned as part of function a.

var goodwinGreeting = function(a){
	return function(b){
	var result = 'Good morning. '.concat(a).concat(b)
	return result;
	};
};

var invitation = goodwinGreeting('Come in and have a chair. ');

invitation('Anything I can do for you?');  //returns "Good morning. Come in and have a chair. Anything I can do for you?"
invitation('What do you want?');  //returns "Good morning. Come in and have a chair. What do you want?"


//Example of a simple greeting function, curried at various levels.

var curriedGreeting = function(greeting) {
  return function(separator) {
    return function(emphasis) {
      return function(name) {
        console.log(greeting + separator + name + emphasis);
      };
    };
  };
};

var pirate_hello = curriedGreeting("Ahoy")(", ")("!");
pirate_hello("Bob")

var sayAhoy = curriedGreeting("Ahoy")(", ");
sayAhoy("!")("Roberto");

var addFlar = sayAhoy(", me matey!");
addFlar ("Bob");


//See also, .\patterns\p.001_curry