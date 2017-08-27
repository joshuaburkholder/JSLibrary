//Variables defined in {} are not visible outside of that block

//We can see how this works by exploring scope in foo function - 

var foo = function(){
	var a = 3, b = 5;					//values are declared for var a and var b
	console.log(a, b);						//at this point, a = 3 & b =5

	var bar = function(){
		var b = 7, c = 11;				//var b is declared with a new value
			console.log(a, b, c);			//now var b = 7, c = 11 (var a still = 3)

		a += b + c;						//var a is assigned a new value, which will include the values
											//for var b and var c, within this scope (b = 7, c = 11)
			console.log(a, b, c);			//var a = 21, b = 7, c = 11
	};									//We now end that scope and return 

	console.log(a, b);						//at this point, a = 3, b = 5, and c is undefined					

	bar();								//we not run function bar
		console.log(a, b);					//now, a = 21, b = 5 (c is undefined)
};



foo();