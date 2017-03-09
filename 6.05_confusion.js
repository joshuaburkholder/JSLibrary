//A general rule of practice:

//When property names are SMALL, SEQUENTIAL NUMBERS, use an ARRAY.
//Otherwise, use an object.

//Since JS doesn't distinguish well between Arrays and Objects,
//a simple is_array formula can be used to distinguish between the two:

//*The following forumals are from 'JavaScript: The Good Parts'

var is_array = function (value) {
	return value && typeof value === 'object' && value.constructor === Array;
};

//If it is an array that was constructed in a different window, then the 
//formula can be adapated as such:

var is_array = function (value) {
	return Object.prototype.toString.apply(value) === '[object Array]';
};