//Every array has a 'length' property.
//The 'length' of an array is not upper bound,
//so if you add an element greater than the 
//current length, the length of the array will increase.

var myArray = ['one', 'two', 'three'];
console.log(myArray.length); 			//3

//The array length is set to the largest integer plus one...

myArray[100] = true;

console.log(myArray.length); //101

//The length of the array can also be set. Making the array
//larger does not allocate more space, but making the length
//smaller will cause it to only return that number of properties.

myArray.length = 2;

console.log(myArray.length);  //2
console.log(myArray); 			//['one', 'two']

//New elements can be added to the end of the array.
myArray[myArray.length] = 'shoe';

console.log(myArray.length);	//3
console.log(myArray); 			//['one', 'two', 'shoe']

//You can also use 'push' to add to an array:
myArray.push('3', '4');		

console.log(myArray.length);  //5
console.log(myArray); 			//returns ['one', 'two', 'shoe', '3', '4']


console.log(myArray[0] + ", " + myArray[1] + ", " + "buckle my" + " " + myArray[2] + "; " + myArray[3] + ", " + myArray[4]   + ", " + "close the door")
 
