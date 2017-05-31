$(document).ready(function(){
	$("input[type=submit").click(function(e){
		var name = $("#name").val();
		var email = $("#email").val();

		if (name == '' || email == '') {
			e.preventDefault();
			alert("Please fill in required fields!");
		}
	});

})