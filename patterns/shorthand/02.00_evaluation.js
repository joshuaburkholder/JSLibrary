//When assigning a variable value to another variable, you can use a shorthand evaluation to make sure the source variable is not empty, null, nor undefined.

//longhand

variableA = "not empty";

if (variableA !== null || variableA !== undefined || variableA !== ''){
	let variableB = variableA;
	console.log(variableB);
}

//shorthand

let variableA = '';

const variableB = variableA || '';
console.log(variableB === '');		//will print 'true';