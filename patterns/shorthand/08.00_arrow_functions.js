// You can rewrite classical functions with arrow functions

//Longhand Examples

function greeting(name){
	console.log('Hello', name);
}

setTimeout(function(){
	console.log("Loading")
}, 2000);

list.forEach(function(item){
	console.log(item);
});

//Shorthand 

greeting = name => console.log('Hello', name);
setTimeout( () => console.log('Loading'), 2000);
list.forEach(item => console.log(item));