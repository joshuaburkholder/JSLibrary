//The general pattern of modules is:
	//*1* a function creates private variables and functions,
	//*2* creates 'privileged' functions that will have access to those var & functions
		//*2a* this is accomplished through the use of closure
	//*3* returns the privileged functions and makes them accessible

//The benefits of using modules:
	//*A* prevents use of global variables,
	//*B* promotes good design practices 
	//*C* encapsulates applications
	//*D* can be used to produce secure objects

//**********Example of producing secure object *******************

var secure_code_maker = function(){			
	var serial = '';						//*1*, *A* - private var are created;
	var num = 0;
	return {
		set_serial: function(p){			//*1*, *B*, *c* - private functions are created and returned;
			serial = String(p);
		},
		set_num: function(s){
			num = s;
		},
		alias: function(){
			var result = serial + num;
			num += 1;
			return result;		
		}
	};
};

//secure_code_maker is a priveleged function that can accesses thre private var and functions

var secure = secure_code_maker();			
secure.set_serial('QED');
secure.set_num(564861);
var uniqueSerialNum = sequer.alias();		
//the module is used to create uniqueSerialNum is "QED564861"