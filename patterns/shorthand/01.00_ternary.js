//longhand

const length = 30;

let size;

if (length > 30){
	size = 'large';
} else {
	size = 'small';
}

console.log(size);


//shorthand

const length = 40;

const size = (length > 30) ? 'large': 'small';

console.log(size);

