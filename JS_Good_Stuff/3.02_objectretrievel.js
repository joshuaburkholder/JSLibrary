

var book = {
	bookTitle: "The Complete Works of O. Henry",
	Author: "O. Henry",
	FirstSelection: {
		title: "Tobin's Palm",
		section: "The Four Million",
		pageNumber: 3,
		firstWord: "Tobin" 
	}, 
	SecondSelection: {
		title: "The Roads We Take",
		section: "Whirligigs",
		pageNumber: 913,
		firstWord: "Twenty" 		
	}
};


// String expressions can be used to retrive a value
// by wrapping them in a [] suffix.

book["bookTitle"] //should return "The Complete Works of O. Henry

//However, the dot notation is the preferred way of retrieving
// a value.

book.FirstSelection.title //should return "Tobin's Palm"

// When a particular property does not exist within an object, the
// value is returned undefined.

book["lastWord"]  //returns undefined
book.ThirdSelection //returns undefined

// The || operator can be used to create a default return in such cases.

var wordsOfWisdom = book["lastWord"] || "what is that, Shakespeare?"
var reference = book.ThirdSelection || "try again."

//in each of the immediately aforementioned cases, 
// the default message should be returned.


