//The prototypal pattern allows for similar objects to be 
//created without the use of classes (as in other languages).

//For instance, we can create an object, 'myBook'.
var myBook = {
	title: 'Candy everywhere',		//this object has a property of 'title'
	get_title: function () {		//and also contains a method that returns the title;
		return this.title;
	},
	subtitle: function() {
		return this.subtitle || ''; //and a method that returns a value for the 'subtitle'
	}
};

//This object can be used as a pattern to create new objects.


var recentBook = Object.create(myBook);			//Here we are creating the object 'recentBook' based on the pattern provided by 'myBook'
recentBook.title = 'Sour Patch Colors';			//and are using object specifiers to fill in some details
recentBook.subtitle = 'the meaning of candy color and why red is the best';
recentBook.reading = function(n) {				//and we can also give this new methods
	var i, s = '';
	for (i=0; i<n; i += 1) {
		if (s)  {
			s += '-';
		}
		s += 'r';
	}
	return s;
};

recentBook.get_title = function() {  			//and amend the method found in the pattern object...
	return this.title + ': ' + this.subtitle();
};

//We now can get:

recentBook.get_title()  //'Sour Patch Colors: the meaning of cany color and why red is the best'

//This is an example of using the prototypal pattern to customize a new object through 'differential inheritance'.