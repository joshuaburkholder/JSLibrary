//JavaScript des not have arrays with more than one dimension, but
//can have "arrays of arrays".

var matrix = [
	['a', 'b', 'c' ],
	[1, 2, 3],
	['do', 're', 'me']
];

console.log(matrix[2][1])  // 're'
console.log(matrix[0][2]) // 'c'
console.log(matrix[1][1]) // 2


//Since JS does not have multi-dimensional arrays, in order to have
//a two dimensional array, you have to build it.

for (i = 0; i < 3; i += 1){
	matrix[i] = [];
};

console.log(matrix);

//creating a matrix this way, all the values will be undefined, and
//if you want a different initial value, you would have to set it explicitly.


//Make a 4*4 array

//make an identity array