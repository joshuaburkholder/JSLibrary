//Project Euler: Problem #1
//If we list all the natural numbers below 10 that are multiples of 3 or 5, 
//we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.


var sumTotal = 0		//set a variable to contain and console.log total value
						//using a for loop, cycle through integers between 0 and 1000
for(i=0; i<1000; i++){	//using the mod operator within an if statement to return only
	if(i%3 || i%5){		//those integers that are multiples of 3 || 5;
		sumTotal +=i 	//those that return true are added to the value of sumTotal; 
	}
}

console.log(sumTotal);		//should return a really large number
							//sumTotal = 466,335
