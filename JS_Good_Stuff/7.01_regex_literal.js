// Regular Expression Literals are the preffered way to create RegEx

// *RegEx are ENCLOSED IN SLASHES
// *RegEx can have flags appended to the literal:
// 	1.  g   Global - multiple matches
// 	2.  i   Insensitive - ignore character case
// 	3.  m   Multiline - ^ & $ match line-ending


// -----------------------EXAMPLE---------------------------

//Make a regular expression object that matches a JavaScript string

var my_regexp = /"(?:\\.|[^\\\])*"/g;