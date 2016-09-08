//Display text to console
console.log("Hello World!");

//Inclue the HTTP library in a variable called http
var http = require('http');

//Asyncronous Callback Function (non blocking)
http.createServer(function(request, response){
	response.writeHead(200);
	response.end('First Node Page');
}).listen(3000);

console.log('Server running on port 3000');