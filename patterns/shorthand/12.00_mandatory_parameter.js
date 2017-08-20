// You can elimate the need for using an 'if' to check for undefined values by using the mandatory paramter shorthand
// This makes the validation code reusable across multiple functions.

function foo(bar) {
	if(bar === undefined){
		throw new Error('Will not compute: missing parameter!');
	}
	return bar;
}

//shorthand(ish)

mandatory = () => {
	throw new Error('Will not compute: missing parameter');
}

foo = (bar = mandatory())=>{
	return bar;
}

