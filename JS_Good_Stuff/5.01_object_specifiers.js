

//Constructors for objects that contain a number of specifications
//can be more easily written by constructing the object to accept
//a single object specifier.

//For example, a typical constructor may look something like this:
var myBook = maker(f, l, m, c, s);

//Since there are a number of specifications, one would need to 
//remember the order of those specifications.

//An alternative would look like this:

var myBook = maker({
	title: t,
	editor: e,
	publisher: p,
	yearPublished: y, 
	cityPublication: c
});

//Here, the order of the arguments (or -if constructed properly - whether an argument is missing)
//does not matter as much.

//This also allows data to be be associated with its methods when being passed through JSON.