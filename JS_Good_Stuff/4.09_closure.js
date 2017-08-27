
//Variables should be defined within the function.


var myObject = (function(){
	var blue = 0;
	return {
		increment: function (inc){
			blue += typeof inc === 'number' ? inc: 1;
		},
		getValue: function(){
			return blue;
		}
	};
}());

console.log(myObject)

console.log(myObject.blue);
console.log(myObject.increment);
console.log(myObject.getValue);
