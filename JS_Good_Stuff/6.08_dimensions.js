

// ************ Underconstruction******************//
// **************************************************
// **************************************************

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

Array.matrix = function (m, n, initial) {
	var a, i, j, mat = [];
	for (i=0; i < m; i += 1){
		a = [];
		for (j =0; j < n; j += 1){
			a[j] = initial;
		}
	mat[i] =a;
	}
  return mat;
}

//Make a 4*4 array

var myMatrix = Array.matrix(4, 4, 0);
console.log(myMatrix[3][3]);


//make an identity array

Array.identity = function (n) {
	var i, mat = Array.matrix(n, n, 0);
	for (i = 0; i < n; i += 1) {
		mat[i][i] = 1;
	}
  return mat;
};

myMatrix = Array.identity(4);

console.log(myMatrix[3][3]); //1