//Below are examples of memoizers from various sources.



//Example from JS:GP,

var memoizer = function (memo, formula){
	var recur = function(n){
	var result = memo[n];
	if (typeof result !== 'number'){
	  result = formula(recur, n);
	  memo[n] = result;
	}
	return result;
  }
 return recur;
};


//Fuchs pattern:

Function.prototype.memoize = function(){
    var self = this, cache = {};
    return function( arg ){
      if(arg in cache) {
        console.log('Cache hit for '+arg);
        return cache[arg];
      } else {
        console.log('Cache miss for '+arg);
        return cache[arg] = self( arg );
      }
    }
  }

//Stoyan example:
function myFunc(param){
    if (!myFunc.cache) {
        myFunc.cache = {};
    }
    if (!myFunc.cache[param]) {
        var result = {}; // ...
        myFunc.cache[param] = result;
    }
    return myFunc.cache[param];
}

// General purpose:
function memoize (func, context) {
    function memoizeArg (argPos) {
        var cache = {};
        return function () {
            if (argPos == 0) {
                if (!(arguments[argPos] in cache)) {
                    cache[arguments[argPos]] = func.apply(context, arguments);
                }
                return cache[arguments[argPos]];
            }
            else {
                if (!(arguments[argPos] in cache)) {
                    cache[arguments[argPos]] = memoizeArg(argPos - 1);
                }
                return cache[arguments[argPos]].apply(this, arguments);
            }
        }
    }
    // JScript doesn't grok the arity property, but uses length instead
    var arity = func.arity || func.length;
    return memoizeArg(arity - 1);


// Simple example with a constant-valued function.

var memoizedFunc0 = (function () {
        var result;
        return function () {
            // in a real-world example this next line would do some
            // complex math instead of just returning a date object
            return result || (result = new Date());
        }
    })();

// Multi-valued function with param
var memoizedFunc1 = (function () {
    var cache = {};
        return function (param1) {
            return param1 in cache ? cache[param1] : (cache[param1] = new Date(param1));
        }
    })();

// multi-valued function with two params
// this time we use two levels of closures and two cache objects
var memoizedFunc2 = (function () {
    var cache1 = {};
        return function (param1, param2) {
            if (!(param1 in cache1)) {
                cache1[param1] = (function () {
                    var cache2 = {};
                    return function (param2) {
                        return param2 in cache2 ? cache2[param2] : (cache2[param2] = new Date(param1, param2));
                    }
                })();
        }
            return cache1[param1](param2);
        }
    })();
