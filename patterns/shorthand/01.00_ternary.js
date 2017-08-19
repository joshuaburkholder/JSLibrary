//Ternary operator can be used to write if...else statements in one line
//You can also use a shorthand for decimal base; i.e., 1e5 == 100000;

//longhand

const length = 30000;

let size;

if (length > 30000){
	size = 'large';
} else {
	size = 'small';
}

console.log(size);


//shorthand

const length = 40;

const size = (length > 3e4) ? 'large': 'small';

console.log(size);
