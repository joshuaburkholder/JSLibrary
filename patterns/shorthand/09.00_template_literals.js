// You can use template literals instead of concatenation to place variables into a string.

//longhand

const signOnSuccessful = 'Welcome, ' + first + ' ' + last + '!'

const db = 'http://' + host + ':' + port + '/' + database;

//Shorthand

let first = 'jane';
let last = 5

const signOnSuccessful = `Welcome ${first} ${last}!`;

const db = `http://${host}:${post}/${database}`;