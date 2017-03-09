//Elements from arrays by using the 'delete' operator.

//Give the following array ...
var myArray = ['one', 'two', 'three'];
console.log(myArray);	//['one', 'two', 'three']

//we can use the 'delete' operator to remove 'two' (in position index 1)
delete myArray[1];
console.log(myArray); //['one', , 'three']

//As noted above, deleting an element of an array in this manner
//will leave a hole in the array.

//A 'splice' method can be used to delete an element and
//replace it with another element, producing a "cleaner" delete.

var myArray = ['one', 'two', 'shoe', 'three', 'four'];
console.log(myArray);	//['one', 'two', 'shoe', 'three', 'four']

//In the following code,
//**the first value locates the element in the index.
//**the second value is the number of elements to replace.

myArray.splice (1, 1);  // deletes 'two'

console.log(myArray) //['one', 'shoe', 'three', 'four']

//This means we can use this same method
//to delete multiple elements in an array.

myArray.splice (1, 2);  // deletes 'shoe' and 'three'

console.log(myArray) //['one', 'four']
