//Callback functions allow asynchronist requests - 
//that keeps the client from experiencing deadtime
//that would occur in a synchronous request.

request = prepare_the_request();				//a function that creates the request
response = send_request_synchronously(request);  //with another function, the response follows the request
display(response);								//a function calls the response to be displayed


//The callback function is created by passing a function
//parameter that will be called.

//Example of an asynchronous request via callback function:

request = prepare_the_request();				//function that creates request
send_request_asynchronously(request, function(response) {  //function that process the request, 
	display(response);									   //but also passes the display(response) function as a parameter
	
});

