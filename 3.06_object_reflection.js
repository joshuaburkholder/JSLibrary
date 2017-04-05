//Methods for identifying object type with 'typeof' and'hasOwnProperty'

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

// 'typeof' can be used to inspect an object and 
// identify the type of properties the object carries

typeof book.bookTitle;    //String
typeof book.Author;       //String
typeof FirstSelection;    //object
typeof book.leadingLady;  //undefined

// Using dot notation, this same method can identify the 
// type of value of an object within another object:

typeof book.FirstSelection.pageNumber;  //number

//Object properties can also be searched by using 'hasOwnProperty' in a 'for in' loop.

for (var name in book) {
  if (book.hasOwnProperty(name)) {
    console.log('This book has a (' + name + '); namely, ' + book[name]);
  }
  else {
    console.log(name);
  }

// This 'for in' loop will return the property and value of 'book'. 
// However, because the properties FirstSelection and SecondSelection are objects, 
// this 'for in' loop will return [object, Object] for the value.
