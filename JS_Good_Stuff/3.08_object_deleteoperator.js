//The 'delete' operator can be used to remove a property from an object.

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

//Using dot notation, we can call up the value of a property
// within book.

console.log(book.Author);  //returns 'O. Henry'

// We can use the 'delete' operator to remove the property
// from the object.

delete book.Author;

console.log(book.Author);  //now returns 'undefined'

//The property of Author has been removed:
console.log(book);

// returns:
// { bookTitle: 'The Complete Works of O. Henry',
//   FirstSelection: 
//    { title: 'Tobin\'s Palm',
//      section: 'The Four Million',
//      pageNumber: 3,
//      firstWord: 'Tobin' },
//   SecondSelection: 
//    { title: 'The Roads We Take',
//      section: 'Whirligigs',
//      pageNumber: 913,
//      firstWord: 'Twenty' } }

//**Note: if there is a prototype of the object, then the default value
// of the deleted property would be returned.


