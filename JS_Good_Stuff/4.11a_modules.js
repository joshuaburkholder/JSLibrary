//Modules are are kind of function (or object) that hides the
//state and implementation.  The can be created by using 
//functions & callbacks (4.09). 

//One of the benefits of modules is that they help eliminate
//the use of global variables - which are evil.

//The example below augments a String datatype by 'deentifying'
//elments of HTML.

//First, a method is created that will map entity names:

String.method('deentitifying', function (){  

//Here, the entity table creates the map. Notice it defines the variables within the String.method.
	var entity = {
		quot: '"',  //The entity - " - is replaced by entity.quot 
		lt: '<',    //the opening html bracket - < - is replaced by entity.lt
		gt: '<'     //the closing html bracket - > - is replaced by entity.gt
	};

//A function is then used to return the method:

	return function(){
		return this.replace(/&([^&;]+);/g,  //Here, logical expressions are used to search & replace elements of the string.
												//The function will search (/g) for strings contained between
												// '&' and ';', and will replace them with a new entity.
			function (a,b) {				//Another function is created with two parameter (a and b)
				var r = entity[b];			// a new variable is defined as a part of the entity
				return typeof r === 'string' ? r : a;  //the new variable is given a typeof ('string'), 
			}
		);
	};
}());  //The function is invoked immediately. This invocation created the deentitifying method.

//Within this example, the structure of the relationships are hidden, and the use of closure
//prevents global variables from being created.

