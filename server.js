var http = require('http');
var controller = require('./library/mainController.js');
var port = 8080;
var server = http.createServer(controller);
server.listen(port);
console.log(server.on('error',function (argument) {
	console.log(argument,'====argument');
}),'===========');
