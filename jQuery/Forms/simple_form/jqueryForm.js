$(document).ready(function(){

	$('div #form1')

	.append(
		$('<h3/>').text("Contact Form"),
		$('<p/>').text("Fill out the form below"),
		$("<form/>", {
			action: '#',
			method: '#'
		})
	  .append(
		 $("<input/>", {
			type: 'text',
			id: 'username',
			name: 'name',
			placeholder: 'Your Name'
		  }), 


		 $("<input/>", {
			type: 'text',
			id: 'useremail',
			name: 'email',
			placeholder: 'Your Email'
			}), 

		 $("<textarea/>", {
			rows: '6px',
			cols: '38px',
			type: 'text',
			id: 'msg',
			name: 'message',
			placeholder: 'Message'
			}), 

		 $("<br/>"), $("<input/>", {
			type: 'submit',
			id: 'submit',
			value: 'Submit'
			})
		 ))
			
});