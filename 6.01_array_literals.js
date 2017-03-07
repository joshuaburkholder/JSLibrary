
//New arrays can be created with array literals.
//The [] are used to access the values within an array via their property.
//The first value to appear in an array will be assigned the property '0', 
//the next value '1', etc.

//This is an empty array...
var empty = [];

//This an
var verticallyChallengedDisneyCharacters = [
	'Doc', 'Grumpy', 'Happy', 'Sleepy', 'Bashful',
	'Sneezy', 'Dopey'
];

empty[1];  //returns undefined
verticallyChallengedDisneyCharacters[4];  //returns 'bashful.' Wouldn't you be if you were "called" out like that?

empty.length  //returns undefined
numbers.length //returns 7

//A comparable object literal would look like this:
var verticallyChallengedDisneyCharacters_objectified = {
	'0': 'Doc',
	'1': 'Grumpy',
	'2': 'Happy',
	'3': 'Sleepy',
	'4': 'Bashful',
	'5': 'Sneezy',
	'6': 'Dopey'
};

//The difference is that the array verticallyChallengedDisneyCharacters inherits from
//the Array.prototype, and with it, a number of useful methods (like .length);
//On the other hand, verticallyChallengedDisneyCharacters_objectified inherits from
//the Object.prototype, which does not have as many useful methods.  That, and it's
//not nice to objectify vertically-challenged Disney characters.


//Also! Arrays can contain different types of values:

var potpourri = [
	'string', 93.9, true, null, undefined,
	['nested', 'array'], {object: true}, NaN,
	Infinity
];

potpourri.length   //returns 9;
