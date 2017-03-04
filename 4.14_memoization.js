//Memoization helps avoid unnecessary and redundant work by,
//using objects to recall previous results.

//For instance, the following function can be used to calculate
//Fibonacci numbers (a number that is the sum of the previous two numbers).

var fibonacci = function (n) {
	return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2);
};

for (var i=0; i <= 10; i += 1){
	console.log('//' + i + ': ' + fibonacci(i));
}

//The Fibonacci numbers are displayed on the fight of the colon.

//Using memoization, we can reduce the number of times the function is called.

var fibonacci = (function(){
  var memo = [0,1];
  var fib =function(n){
    var result = memo[n];
    if (typeof result !== 'number'){
      resut = fib(n-1) + fib(n-2);
      memo[n] = result;
    }
    return result;
  };
  return fib;
}());

//The second function produces the same results as the first, but is
//called fewer times. This is because the results are stored in 
//an array ('memo') and can be recalled by the function.

// For a general memoizer, see patterns/p.002_memoizer