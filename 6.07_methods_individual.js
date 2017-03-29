//Methods can also be added to an individual arrays.
//(This is because arrays are basically objects in javascript)

var oddNumbers = [1, 3, 5]
var arrayOfRandomNumbers = [1, 3, 5, 7, 8, 9, 21, 42];

//We can add a totaling function to either of the arrays listed above.

//Using the reduce function from 6.06, 
var reduce = function (f, value) {
    var i;
    for (i = 0; i < this.length; i+=1) {
        value = f(this[i], value);
    }
};

var add = function (a, b) {
	return a + b;
};

//the "reduce" method can not be inserted into arrayofRandomNumbers:


arrayOfRandomNumbers.total = function(){
	return this.reduce(add, 0);
};

total = arrayOfRandomNumbers.total();

console.log(total);
//total = 96
