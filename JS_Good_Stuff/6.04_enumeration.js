//Since arrays are really objects in JS,
//the 'for in' statement can be used to loop
//through an array.

var myArray = ['one', 'two', 'shoe', 'three', 'four', 'door'];

var i;
for (i = 0; i < myArray.length; i += 1){
	console.log(myArray[i]);
}

//The 'for in' statement iterates through the array, 
//returning each element one at a time:
//'one'
//'two'
//'shoe'
//'three'
//'four'
//'door'