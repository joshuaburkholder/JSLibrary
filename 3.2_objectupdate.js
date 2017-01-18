// The value of book is "The Complete Works of O. Henry", 
// (which is itself is "invaluable" work of literature.

var book = "The Complete Works of O. Henry";

console.log(book); //returns "The Complete Works of O.Henry"

// The value within an object can be updated by assignment.
// Below, the value of book is changed to "The Complete
// Works of Shakespeare"

var book = "The Comlete Works of Shakespeare";

console.log(book);  //now returns "The Complete Works of Shakespeare"

// When an object does not have a certain property value,
// the object itself can be augmented to include said property by
// assignment.

var book = {
	title: "The Complete Works of Shakespeare",
	bestProtagonist: "Macbeth" 
};

console.log(book);  
//From the console.log above, we see that the object has
// (only) two values: title and bestProtagonist. 

//We can now augment the object to include other values:

book['leadingLady'] = "Lady Macbeth";

console.log(book);
//The object now has a property of "leadingLady" with the 
// value "Lady Macbeth"

// We can also augment the object by adding properties with 
// dot notation:

book.antagonist = "Iago";

console.log(book); 

//We now see that a new property (antagonist) has been added
// with the value of "Iago". While this illustrates how to 
// augment an object by adding additional properties, it will not,
// however help you pass your English exam, as Iago was not a 
// character in Macbeth. 