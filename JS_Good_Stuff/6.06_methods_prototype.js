//Methods can be stored in Array.prototype. 
//The Array.prototype can be augmented just as Object.prototype.

//For example, an array method can be used to perform computations on an array:
// Array.method('reduce', function (f, value){
// 	var i;
// 	for (i=0; i < this.length; i += 1) {
// 		value = f(this[i], value);
// 	}
// 	return value;
// });

Array.prototype.method = function reduce(f, value) {
    var i;
    for (i = 0; i < this.length; i+=1) {
        value = f(this[i], value);
    }
};

//Now that the function is added to the Array.prototype, every array 
//inherits the method.

//Create an array of numbers

var arrayOfRandomNumbers = [1, 3, 5, 7, 8, 9, 21, 42];

//Define two simple functions. 
//One: add numbers
//Two: multiply numbers

var add = function (a, b) {
	return a + b;
};

var multiply = function (a, b) {
	return a * b;
}

//Invoke the data's reduce method, passingin the add funciton

var sum = arrayOfRandomNumbers.reduce(add, 0); 
//the value of sum would be 96 - the sum of all the numbers in arrayOfRandomNumbers
console.log(sum);  

//Invoke the reduce method again, this time passing the multiply function.

var multiplication = arrayOfRandomNumbers.reduce (multiply, 1);
//the value of multiplication would be 6,667,920 - the product of all the numbers in arrayOfRandomNumbers
console.log(multiplication);