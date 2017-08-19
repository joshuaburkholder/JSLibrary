//You can shorten 'for' loops by indexing the array

allNumbers = [1, 2, 3, 4, 5];

//longhand

for (let i = 0; i < allNumbers.length; i++){
	console.log(allNumbers[i]);
}

//shorthand

for (let index in allNumbers){
	console.log(allNumbers[index]);
}

