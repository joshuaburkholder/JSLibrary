//REGULAR EXPRESSIONS

// Regular expression is the syntax of a simple language.
 // JavaScript was borrowed from Java & Perl. 

// RegEx are used with methods to SEARCH, REPLACE, and EXTRACT information from strings.

// Characters are sometimes interpreted as literals or operators, depending on the context.

// ---------------------------------------


^    //Indicates the BEGINNING OF A STRING
	//Prevents 'exec' from skipping over a non-URL-like-prefix

//EXAMPLE:

var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/[^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;


// There are two ways to create Regular Expressions:
// 1. RegEx literals
// 2. RegEx constructor