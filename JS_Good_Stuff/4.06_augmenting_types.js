//Just as the Object.prototype can be augmented, making 
//methods available to other objects, so, too, can
//functions.

//Functions can be augmented by prototype, allowing all
//functions to use a particular method.

//The basic structure is as follows:
Function.prototype.method = function (name, func) {
	this.prototype[name] = func;
	return this;
};

