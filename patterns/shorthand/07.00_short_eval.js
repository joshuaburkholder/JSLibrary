

//Longhand

let dbhost;
if(process.env.DB_HOST){
	dbhost = process.env.DB_HOST;
}else{
	dbhost = 'localhost';
}

//shorthand

const dbhost = process.env.DB_HOST || 'localhost';