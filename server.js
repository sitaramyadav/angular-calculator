var http = require('http');
var controller = require('./library/mainController.js');
var controller = require('./library/mainCtrl.js');
var port = 4444;
var server = http.createServer(controller);
server.listen(port);
console.log(server.on('error',function (argument) {
	// console.log(argument,'====argument');
}),'===========');
