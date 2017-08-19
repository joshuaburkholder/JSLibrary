//You can use shortand to log arrays

allNumbers = [1, 2, 3, 4, 5];

function logAllNumbers(element, index, array){
	console.log("a[" + index + "] = " + element);
}



[2, 4, 5].forEach(logAllNumbers);