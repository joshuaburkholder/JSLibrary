//Cascades are a way to call many methods on the same object.
//Example: AJAX request:

//getElement function produces an object that gives functionality to the DOM element "#myBabyDiv"
getElement('myBabyDiv')   
	.move(350, 150)
	.width(100)
	.height(100)
	.color('black')
	.border('3px')
	.padding('5px')

//several methods can be used sequentially - 	
	.on('mousedown', function(m){
		this.startDrag(m, this.getNinth(m));
	})
	.on('mousemove', 'drag')
	.on('mouseup', 'stopDrag')
	.later(2000, function(){

//this can be used to enable a cascade, call multiple methods in a single statement 
		this
			.color('white')
			.setHTML('if you\'re thinkin\' about my baby')
			.slide(400, 40, 200, 200);
	})
	tip('Ooh, ooh. Yea, yea, yea now');
